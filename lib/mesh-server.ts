// import { decompress } from 'lz4js'
import { decodeBlock } from 'lz4'
import { readFileSync } from 'fs'

export function readMesh (path: string) {
  const buffer = readFileSync(path)

  // read params from file
  const uncompressedSize = buffer.readUInt32LE(0x52)
  const compressedSize = buffer.readUInt32LE(0x4e)
  const numLods = buffer.readUint32LE(0x44)
  console.log({
    compressedSize,
    uncompressedSize,
    numLods
  })
  
  // decompress
  const src = buffer.subarray(0x56, 0x56 + compressedSize)
  const dest = Buffer.alloc(uncompressedSize)
  decodeBlock(src, dest)
  
  // read params from decompressed buffer
  const sharedVertexCount = dest.readUInt32LE(0x74)
  const totalVertexCount = dest.readUInt32LE(0x78)
  const pointCount = dest.readUInt32LE(0x80)
  const uvCount = dest.readUInt32LE(0x74)
  console.log({
    sharedVertexCount,
    totalVertexCount,
    pointCount,
    uvCount
  })
  
  // build vertex buffer
  const vertexBuffer:number[] = []
  let offset = 0xb3
  for (let i = 0; i < sharedVertexCount; i++) {
    // little endian
    const x = dest.readFloatLE(offset + 0)
    const y = dest.readFloatLE(offset + 4)
    const z = dest.readFloatLE(offset + 8)
    offset += 16
    vertexBuffer.push(x, y, z)
  }
  
  // build uv buffer
  const uvBuffer:number[] = []
  const uvHeaderSize = uvCount * 4 - 4
  offset += uvHeaderSize
  for (let i = 0; i < uvCount; i++) {
    // # 2 half-precision floats
    // u, v = struct.unpack('<4xee8x', buf.read(16))
    // uv_buffer.append((u, v))
    offset += 16
  }
  
  // build index buffer
  const indexBuffer: number[] = []
  const faceCount = Math.floor(totalVertexCount / 3)
  offset += 4
  for (let i = 0; i < faceCount; i++) {
    const v1 = dest.readUInt16LE(offset + 0)
    const v2 = dest.readUInt16LE(offset + 2)
    const v3 = dest.readUInt16LE(offset + 4)
    offset += 6
    indexBuffer.push(v1, v2, v3)
  }
  
  console.log({
    vertexBuffer,
    indexBuffer
  })

  return {
    compressedSize,
    uncompressedSize,
    numLods,
    sharedVertexCount,
    totalVertexCount,
    pointCount,
    uvCount,
    vertexBuffer,
    indexBuffer,
    uvBuffer
  }
}
