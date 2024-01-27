#!/usr/bin/env tsx

// @ts-ignore
import { decompressBlock } from 'lz4js'
import { readFileSync, writeFileSync } from 'fs'
import { homedir } from 'os'
import { basename } from 'path'
import { log } from 'console'

/* 
   Synopsis: tsx bin/extract-mesh-buffer.ts <path/to/BstBaked.meshes>
   This will save the uncompressed meshbuffer at the same place
   using a '.uncompressed' file extension. 
   This file can be used for further inspection. It won't be in
   a state where you can import it in Blender or other tools!
*/

const srcPath = process.argv[2]
const extension = '.meshes'
if (srcPath === undefined) throw new Error('Missing path argument!')
if (!srcPath.endsWith(extension)) throw new Error('Path argument must point to a .mesh file!')
const dstPath = srcPath.substring(0, srcPath.length - extension.length).concat('.uncompressed')
const file = readFileSync(srcPath)

const offset = 0x88 // file.readUint32LE(0x10)
console.log('offset:', offset)
const uncompressedSize = file.readUint32LE(0x20)
const compressedSize = file.readUint32LE(0x14)
// const numLods = file.readUint32LE(0x44)

console.log({
  uncompressedSize,
  compressedSize,
  // numLods
})

for (let i = 0x70; i < 400; i++) {
  const offset = i
  const compressedSize = 1024
  const buffer = lz4Decompress(file, offset, compressedSize)
  log(offset.toString().padStart(3, '0'), Buffer.from(buffer.subarray(0, 60)).toString('hex'))
}

// writeFileSync(dstPath, dest)
// console.log('Extracted:', dstPath)

function lz4Decompress (buffer: Buffer, offset: number, compressedSize: number, uncompressedSize = compressedSize * 5) {
  const src = new Uint8Array(buffer.subarray(offset, offset + compressedSize))
  const dst = new Uint8Array(uncompressedSize)
  decompressBlock(src, dst, 0, compressedSize, 0)
  return dst  
}
