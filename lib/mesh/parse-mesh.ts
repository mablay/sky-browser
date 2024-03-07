/* ************* DISCLAIMER *************** *\
This is the result of trial and error.
Consider everything you read as potentially
wrong or deprecated. Do not consider it fact.
However, some of it might be correct. */
import { decompressBlock } from 'lz4js'
import { createCursor, type Cursor } from '../cursor'

export interface SkyMeshFileHeader {
  uncompressedSize: number
  compressedSize: number
  numLods: number
}

export interface SkyMesh {
  /** Vertices.
   * The most elementary part of a mesh
   * is the vertex (vertices plural) which is a
   * single point or position in 3D space.
   * (definition by Blender) */
  vertices: number[]

  /** A corner references the index of a vertex.
   * 3 corners constitue a face (triangle).
   * Combined, faces define the surface of a mesh.
   * @alias indexBuffer */
  corners: number[]

  /**
   * A Normal vector explains how light bounces of the
   * mesh surface at the origin of the vector.
   * 
   * TODO: check if sky meshes are using:
   * * normal vectors (x, y, z) probably 12 - 16 byte
   * * normal texture uv mapping (x, y) probably 4 - 8 byte
   */
  normals: number[]

  /**
   * UV Texture mapping
   * Each vertex is assigned a 2D position in a texture.
   * This should occur for each face corner, but the data
   * ranges indicate that it's happening per vertex, which
   * is strange.
   */
  uv: number[]
}

/**
 * Defines which features are included in a mesh file.
 * This information is critical, for a consistent result
 * since each feature impacts the offset of the next.
 */
interface MeshFlags {
  hasVertices?: boolean
  hasNormals?: boolean
  hasUVs?: boolean
  hasIndex?: boolean
  hasBones?: boolean
  hasAnimation?: boolean
}

export function parseMeshFile (file: DataView) {
  const { header, body } = parseMeshFileSections(file)
  console.log('file header:', header)
  const skyMesh = parseMeshBody(body)
  return { header, skyMesh }
}

/**  
  * A sky mesh file has two parts
  * - header: 86 bytes (structured data)
  * - body: remaining bytes (lz4 compressed)
  *
  * This method takes the data view of a .mesh file
  * and returns a partially parsed header and a
  * decompressed body.
*/
function parseMeshFileSections (file: DataView) {
  /** partially parsed mesh file header */
  const header: SkyMeshFileHeader = {
    uncompressedSize: file.getUint32(0x52, true),
    compressedSize: file.getUint32(0x4e, true),
    numLods: file.getUint32(0x44, true)
  }

  /* ------ decompress mesh buffer ------ */
  const compressedBuffer = new Uint8Array(file.buffer.slice(0x56, 0x56 + header.compressedSize))
  const decompressedBuffer = new Uint8Array(header.uncompressedSize)
  console.time('decompress')
  decompressBlock(compressedBuffer, decompressedBuffer, 0, header.compressedSize, 0)
  console.timeEnd('decompress')
  /** decompressed mesh file buffer */
  const body = new DataView(decompressedBuffer.buffer)
  return { header, body }
}

/**
 * Parse mesh vertices, faces, normals, UV mapping, bones, animation, etc.
 * @param body The decompressed body section of a mesh file.
 * @see parseMeshFileSections
 * Most of the body data is little endian encoded.
 */
export function parseMeshBody (body: DataView) {
  const vertexOffset = 0xb3
  const mesh: Partial<SkyMesh> = {}

  /* -------------- body info --------------- */
  const vertexCount = body.getUint32(0x74, true)
  const cornerCount = body.getUint32(0x78, true)

  const flags: MeshFlags = {
    hasVertices: true,
    hasNormals: true,
    hasUVs: true,
    hasIndex: true
  }
  console.log('flags:', flags)
  const cursor = createCursor(body, vertexOffset)
  const logOffset = (tag: string) => console.log(tag.padStart(10), 'offset:', cursor.offset.toString(16).padStart(8, '0'), cursor.offset)

  if (flags.hasVertices) {
    logOffset('vertex')
    mesh.vertices = parseVertices(cursor, vertexCount)
  }

  if (flags.hasNormals) {
    logOffset('normals') // offset: 20291, length: 10056 !! 20112
    mesh.normals = parseNormals(cursor, vertexCount)
  }

  if (flags.hasUVs) {
    logOffset('uv') // 30347
    mesh.uv = parseUV(cursor, vertexCount)
  }
  
  if (flags.hasIndex) {
    logOffset('index')
    mesh.corners = parseCorners(cursor, cornerCount)
  }

  return mesh as SkyMesh
}

/** NOTE: Seem reliable */
function parseVertices (cursor: Cursor, vertexCount: number) {
  const vertices:number[] = []
  for (let i = 0; i < vertexCount; i++) {
    const x = cursor.readFloat32()
    const y = cursor.readFloat32()
    const z = cursor.readFloat32()
    // what about:            offset + 12
    // the last 4 bytes have unknown purpose
    vertices.push(x, y, z)
    cursor.skip(4)
  }
  return vertices
}

/** NOTE: Seems reliable */
function parseCorners (cursor: Cursor, cornerCount: number) {
  const indexBuffer: number[] = []
  for (let i = 0; i < cornerCount; i++) {
    indexBuffer.push(cursor.readUint16())
  }
  return indexBuffer
}

function parseNormals (cursor: Cursor, vertexCount: number) {
  const normBuffer:number[] = []
  for (let i = 0; i < vertexCount; i++) {
    // const u1 = cursor.readFloat16()
    const v1 = cursor.readFloat16()
    const u2 = cursor.readUint16()
    // const v2 = cursor.readUint16()
    normBuffer.push(u2, v1, 0)
  }
  return normBuffer
}

function parseUV (cursor: Cursor, vertexCount: number) {
  const uvs:number[] = []
  for (let i = 0; i < vertexCount; i++) {
    uvs.push(
      cursor.readFloat16(),
      1-cursor.readFloat16(),
    )
    // skipping 12 bytes! why?
    cursor.skip(12)
  }
  return uvs
}
