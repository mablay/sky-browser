#!/usr/bin/env tsx

// @ts-ignore
import { decompressBlock } from 'lz4js'
import { readFileSync, writeFileSync } from 'fs'
import { homedir } from 'os'


/* extracts the compressed buffer from a mesh and writes it to file
   for further inspection */

const file = readFileSync(`${homedir()}/data/sky/apk-0-21-5/assets/Data/Meshes/Bin/BellTower_01.mesh`)

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

writeFileSync(`${homedir()}/data/sky/apk-0-21-5/assets/Data/Meshes/Bin/BellTower_01.uncompressed`, dest)
