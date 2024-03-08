/* CLI script to parse a .mesh file */
import { readFileSync } from "fs"
import { parseMeshBody, type SkyMeshFileHeader } from "../lib/mesh/parse-mesh"
import { decodeBlock } from 'lz4'

const path = process.argv[2]
const file = readFileSync(path)

// the decompression library for NodeJS is different than the one for the browser
// so we have to substitute the first step until decompression is finished.
const header: SkyMeshFileHeader = {
  uncompressedSize: file.readUint32LE(0x52),
  compressedSize: file.readUint32LE(0x4e),
  numLods: file.readUint32LE(0x44)
}
const compressedBuffer = file.subarray(0x56, 0x56 + header.compressedSize)
const decompressedBuffer = Buffer.alloc(header.uncompressedSize)
decodeBlock(compressedBuffer, decompressedBuffer, 0, header.compressedSize)

// continue parsing the mesh as usual

const mesh = parseMeshBody(new DataView(decompressedBuffer.buffer))

logSection('vertices')
logSection('normals', 2)
logSection('uv', 2)
logSection('corners')

function logSection (prop: 'vertices' | 'normals' | 'uv' | 'corners', cols = 3) {
  const data = mesh[prop]
  console.log(prop, data.length / cols)
  console.log('   ', data.slice(0, cols), '...')
  console.log('   ', data.slice(data.length - cols))
  console.log('    min:', Math.min.apply(null, data.filter(x => !Number.isNaN(x))), 'max:', Math.max.apply(null, data.filter(x => !Number.isNaN(x))))
  console.log('')
}
