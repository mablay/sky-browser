#!/usr/bin/env tsx

// @ts-ignore
import { decompressBlock } from 'lz4js'
import { readFileSync, writeFileSync } from 'fs'
import { homedir } from 'os'
import { basename } from 'path'


/* 
   Synopsis: tsx bin/extract-mesh-buffer.ts <path/to/file.mesh>
   This will save the uncompressed meshbuffer at the same place
   using a '.uncompressed' file extension. 
   This file can be used for further inspection. It won't be in
   a state where you can import it in Blender or other tools!
*/

const srcPath = process.argv[2]
if (srcPath === undefined) throw new Error('Missing path argument!')
if (!srcPath.endsWith('.mesh')) throw new Error('Path argument must point to a .mesh file!')
const dstPath = srcPath.substring(0, srcPath.length - 5).concat('.uncompressed')
const file = readFileSync(srcPath)

const uncompressedSize = file.readUint32LE(0x52)
const compressedSize = file.readUint32LE(0x4e)
const numLods = file.readUint32LE(0x44)

console.log({
  uncompressedSize,
  compressedSize,
  numLods
})

const src = new Uint8Array(file.slice(0x56, 0x56 + compressedSize))
const dest = new Uint8Array(uncompressedSize)
decompressBlock(src, dest, 0, compressedSize, 0)

writeFileSync(dstPath, dest)
console.log('Extracted:', dstPath)