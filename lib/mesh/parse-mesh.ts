/* ************* DISCLAIMER *************** *\
This is the result of trial and error.
Consider everything you read as potentially
wrong or deprecated. Do not consider it fact.
However, some of it might be correct. */
import { decompressBlock } from 'lz4js'
import { getFloat16 } from '@petamoriken/float16'

interface SkyMeshFileHeader {
  uncompressedSize: number
  compressedSize: number
  numLods: number
}

interface SkyMesh {
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

  normals: number[]

  uv: number[]
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
  decompressBlock(compressedBuffer, decompressedBuffer, 0, header.compressedSize, 0)
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
function parseMeshBody (body: DataView) {
  const vertexOffset = 0xb3
  let offset = vertexOffset
  const mesh: Partial<SkyMesh> = {}
  const debugInfo: any = {}

  /* -------------- body info --------------- */
  const vertexCount = body.getUint32(0x74, true)
  const cornerCount = body.getUint32(0x78, true)

  debugInfo.vertexOffset = offset
  ;[mesh.vertices, offset] = parseVertices(body, offset, vertexCount)

  debugInfo.normalOffset = offset
  ;[mesh.normals, offset] = parseNormals(body, offset, vertexCount)
  
  debugInfo.uvOffset = offset
  ;[mesh.uv, offset] = parseUV(body, offset, vertexCount)

  debugInfo.cornerOffset = offset
  ;[mesh.corners, offset] = parseCorners(body, offset, cornerCount)

  console.log(debugInfo)
  return mesh as SkyMesh
}

/** According to Blender:
 * 
 * > Vertices. The most elementary part of a mesh
 *   is the vertex (vertices plural) which is a
 *   single point or position in 3D space
 * 
 * NOTE: Seem reliable
 * */
function parseVertices (body: DataView, offset: number, vertexCount: number): [number[], number] {
  const vertices:number[] = []
  for (let i = 0; i < vertexCount; i++) {
    const x = body.getFloat32(offset + 0, true)
    const y = body.getFloat32(offset + 4, true)
    const z = body.getFloat32(offset + 8, true)
    // what about:            offset + 12
    // the last 4 bytes have unknown purpose
    vertices.push(x, y, z)
    offset += 16
  }
  return [vertices, offset]
}

function parseCorners (body: DataView, offset: number, cornerCount: number): [number[], number] {
  const indexBuffer: number[] = []
  for (let i = 0; i < cornerCount; i++) {
    const index = body.getUint16(offset, true)
    indexBuffer.push(index)
    offset += 2
  }
  return [indexBuffer, offset]
}

function parseNormals (body: DataView, offset: number, vertexCount: number): [number[], number] {
  const normBuffer:number[] = []
  for (let i = 0; i < vertexCount; i++) {
    const u1 = getFloat16(body, offset + 0, true)
    const v1 = getFloat16(body, offset + 2, true)
    const u2 = body.getUint16(offset + 0, false)
    const v2 = body.getUint16(offset + 2, false)
    normBuffer.push(u2, v1, 0)
    offset += 4
  }
  return [normBuffer, offset]
}

function parseUV (body: DataView, offset: number, vertexCount: number): [number[], number] {
  const uvs:number[] = []
  for (let i = 0; i < vertexCount; i++) {
    uvs.push(
      getFloat16(body, offset + 0, true),
      1-getFloat16(body, offset + 2, true),
    )
    // skipping 12 bytes! why?
    offset += 16
  }
  return [uvs, offset]
}
