/* ************* DISCLAIMER *************** *\
This is the result of trial and error.
Consider everything you read as potentially
wrong or deprecated. Do not consider it fact.
However, some of it might be correct. */
import { decompressBlock } from 'lz4js'
import { createCursor, type Cursor } from '../cursor'

export interface SkyMeshFileHeader {
  version: number
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

  /** A corner references a vertex by index.
   * 3 corners constitue a face (triangle).
   * Combined, faces define the surface of a mesh.
   * @alias indexBuffer or faceIndex */
  index: number[]

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

  flags: Record<string, any>
}

/**
 * Defines which features are included in a mesh file.
 * This information is critical, for a consistent result
 * since each feature impacts the offset of the next.
 */
interface MeshFlags extends Record<string, number | any> {
  vertexCount: number
  cornerCount: number
  skipMeshPos: number
  loadMeshNorms: number
  skipUvs: number
  // hasIndex: boolean
  // hasBones?: number
  // hasAnimation?: number
}

/**  
  * A sky mesh file has two parts
  * - header: 86 bytes (structured data)
  * - body: remaining bytes (lz4 compressed)
  *
  * This method takes the data view of a .mesh file
  * parses the file header,
  * decompresses the file body,
  * and returns header and a parsed version of the
  * compressed body.
*/
export function parseMeshFile (file: DataView) {
  const header = parseMeshFileHeader(file)
  const body = decompressMeshFileBody(file, header)
  const skyMesh = parseMeshBody(body, header.version)
  return { header, skyMesh }
}

/** partially parsed mesh file header.
 * Some bytes remain un-parsed and might actually be relevant!
 */
export function parseMeshFileHeader (file: DataView) {
  const header: SkyMeshFileHeader = {
    version: file.getUint8(0x00),
    uncompressedSize: file.getUint32(0x52, true),
    compressedSize: file.getUint32(0x4e, true),
    numLods: file.getUint32(0x44, true)
  }
  return header
}

/** used for LZ4 decompression of the .mesh files body */
function decompressMeshFileBody (file: DataView, header: SkyMeshFileHeader) {
  /* ------ decompress mesh buffer ------ */
  const compressedBuffer = new Uint8Array(file.buffer.slice(0x56, 0x56 + header.compressedSize))
  const decompressedBuffer = new Uint8Array(header.uncompressedSize)
  decompressBlock(compressedBuffer, decompressedBuffer, 0, header.compressedSize, 0)
  /** decompressed mesh file buffer */
  const body = new DataView(decompressedBuffer.buffer)
  return body
}

/** the first part of the decompressed .mesh file body section
 * contains meta information about the mesh.
 * Some of that affects how the rest of the data is parsed!
 * Beware: Some of this is likely incorrect.
 * Either because I misread the mesh.hexpat template
 * or because it itself is not 100% accurate.
 * @see https://github.com/oldmud0/SkyEngineTools/blob/master/imhex/mesh.hexpat
 */
export function parseMeshFlags (cursor: Cursor, version = 0x1F): MeshFlags {
  return {
    inf: cursor.readFloat32(),
    bboxOld: {
      x0: cursor.readFloat32(),
      y0: cursor.readFloat32(),
      z0: cursor.readFloat32(),
      x1: cursor.readFloat32(),
      y2: cursor.readFloat32(),
      z3: cursor.readFloat32(),
    },
    bbox: { // version >= 0x1c
      x0: cursor.readFloat32(),
      y0: cursor.readFloat32(),
      z0: cursor.readFloat32(),
      x1: cursor.readFloat32(),
      y2: cursor.readFloat32(),
      z3: cursor.readFloat32(),
    },
    padding: {
      p01: cursor.readFloat32(),
      p02: cursor.readFloat32(),
      p03: cursor.readFloat32(),
      p04: cursor.readFloat32(),
      p05: cursor.readFloat32(),
      p06: cursor.readFloat32(),
      p07: cursor.readFloat32(),
      p08: cursor.readFloat32(),
      p09: cursor.readFloat32(),
      p10: cursor.readFloat32(),
      p11: cursor.readFloat32(),
      p12: cursor.readFloat32(),
      p13: cursor.readFloat32(),
      p14: cursor.readFloat32(),
      p15: cursor.readFloat32(),
      p16: cursor.readFloat32(),
    },
    vertexCount: cursor.readUint32(),
    cornerCount: cursor.readUint32(),
    isIdx32: cursor.readUint32(),
    numPoints: cursor.readUint32(),
    prop11: cursor.readUint32(),
    prop12: cursor.readUint32(),
    prop13: cursor.readUint32(),
    prop14: cursor.readUint32(),
    loadMeshNorms: cursor.readUint8(),
    loadInfo2: cursor.readUint8(),
    loadInfo3: cursor.readUint8(),
    skipMeshPos: cursor.readUint32(),
    skipUvs: cursor.readUint32(),
    flag3: cursor.readUint32(),
    unk1: cursor.readUint32(),
    unk2: cursor.readUint32(),
    unk3: cursor.readUint32(),
    unk4: cursor.readUint32(),
  }
}

/**
 * Parse mesh vertices, faces, normals, UV mapping, bones, animation, etc.
 * @param body The decompressed body section of a mesh file.
 * @see parseMeshFileSections
 * Most of the body data is little endian encoded.
 */
export function parseMeshBody (body: DataView, version = 0x1F) {
  // console.log('file version:', version)
  const vertexOffset = 0xb3
  const mesh: Partial<SkyMesh> = {}

  /* -------------- body info --------------- */
  const cursor = createCursor(body) // 0x74
  /** the name flags is up for debate, could also be info, meta, etc. */
  const flags = parseMeshFlags(cursor, version)
  const { vertexCount, cornerCount } = flags
  /** can this be found in the flags? */
  const hasIndex = true


  // console.log('flags:', flags)
  // const cursor = createCursor(body, vertexOffset)
  // const logOffset = (tag: string) => console.log(tag.padStart(10), 'offset:', cursor.offset.toString(16).toUpperCase().padStart(8, '0'), cursor.offset)

  /* --- Conditional parsing of mesh features --- */

  if (flags.skipMeshPos === 0) {
    // logOffset('vertex')
    mesh.vertices = parseVertices(cursor, vertexCount)
  }

  if (flags.loadMeshNorms > 0) {
    // logOffset('normals')
    mesh.normals = parseNormals(cursor, vertexCount)
  }

  if (flags.skipUvs === 0) {
    // logOffset('uv')
    mesh.uv = parseUV(cursor, vertexCount)
  }
  
  if (hasIndex) {
    // flags are not corretly parsed / applied
    // some models need to skip some byte, see next line
    // cursor.skip(vertexCount * 8)
    // logOffset('index')
    mesh.index = parseFaceIndex(cursor, cornerCount)
  }

  mesh.flags = flags
  return mesh as SkyMesh
}

/** STATUS: Seem reliable */
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

/** STATUS: partially reliable */
function parseFaceIndex (cursor: Cursor, cornerCount: number) {
  // AP21_Deer offset: 0x10887
  // cursor.offset = 0x10887 // x + 12280  || 1535
  const indexBuffer: number[] = []
  for (let i = 0; i < cornerCount; i++) {
    indexBuffer.push(cursor.readUint16())
  }
  return indexBuffer
}

/**
 * STATUS: UNRELIABLE!
 * Interpreting this data range as (x,y,z) normal vectors
 * worked for JackyHouse.mesh but it seemed to me, that in
 * most, if not all other cases, this is not how it's done.
 */
function parseNormals (cursor: Cursor, vertexCount: number) {
  const normBuffer:number[] = []
  for (let i = 0; i < vertexCount; i++) {
    // const x = cursor.readFloat32()
    const x = cursor.readUint8() / 256
    const y = cursor.readUint8() / 256
    const z = cursor.readUint8() / 256
    const w = cursor.readUint8() / 256
    // const u2 = cursor.readUint16()
    // const v2 = cursor.readUint16()
    normBuffer.push(x, y, z)
  }
  return normBuffer
}

/**
 * STATUS: Worked well when applied to FriendshipStatue.
 * But I only managed that with a lot of manual effort.
 * Level files are required to link a .mesh file to the
 * correct .ktx file. Once mesh parsing becomes more
 * stable, I'll tend to this feature and we can test
 * UV mapping.
 */
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
