import assert from 'assert'
import { readFileSync, writeFileSync } from 'fs'

export async function readLevel (path: string) {
  const file = readFileSync(path)
  const view = new DataView(file.buffer, 0, file.byteLength)
  const header = file.subarray(0, 4).toString()
  const version = view.getUint32(4, true)
  const namesOffset = view.getUint32(0x20, true)
  const bstOffset = view.getUint32(0x24, true)
  // const autoClumpOffset = 
  
  const floats: number[] = []
  for (let i = 0x4; i < namesOffset; i += 4) {
    const value = view.getFloat32(i, true)
    floats.push(value)
  }

  let offset = namesOffset
  const names:string[] = []
  for (let i = 0; i < 100000; i++) {
    const { string, byteLength } = readString(file, offset)
    if (byteLength === 1) break
    names.push(string)
    offset += byteLength
  }

  assert.equal(view.getUint32(offset), 0)
  offset += 4
  const nodes: any[] = []

  // const bstCount = 4996
  const bstCount = 499
  for (let i = 0; i < bstCount; i++) {
    const node = readBstNode(file, offset)
    if (node === undefined) break
    offset = node.offset + node.bytes.byteLength + 4
    nodes.push(node)
  }
  // const bst = readString(file, offset)
  // const nodeName = bst.string
  // offset += bst.byteLength

  console.log({
    header,
    version,
    namesOffset,
    names: [names[0], '...', names[names.length - 1]].join(' '),
    namesCount: names.length,
    bstOffset: [bstOffset, toHex(bstOffset)].join(' ')
  })
  // nodes.sort((a, b) => a.type - b.type)
  nodes.sort((a, b) => b.id - a.id)
  for (const node of nodes) {
    // if (node.type !== 9) continue
    const len = toHex(node.length, true, 2)
    console.log(
      toHex(node.offset, true, 3),
      node.name.padEnd(20),
      ''.padStart(2 - node.type.toString().length), node.type,
      len,
      ''.padStart(3 - node.length.toString().length), node.length,
      node.bytes.subarray(0, 35))
  }
}

function readString (buffer: Buffer, offset: number) {
  const scope = buffer.subarray(offset)
  const index = scope.findIndex(value => value === 0)
  const string = scope.subarray(0, index).toString()
  return {
    byteLength: index + 1,
    string,
  }
}

function readBstNode (buffer: Buffer, offset: number) {
  const index = buffer.indexOf('BstNode_', offset)
  if (index < 0) return
  const type = buffer.readUInt32LE(index - 4)
  const bstName = readString(buffer, index)
  const next = buffer.indexOf('BstNode_', index + 1)
  if (next < 0) throw new Error('NYI proper BstNode parser!')
  return {
    type, // 4 byts
    name: bstName.string, // zero terminated string
    id: parseInt(bstName.string.substring(8)),
    offset: index - 4, // offset including the type
    length: next - index,
    bytes: buffer.subarray(index + bstName.byteLength, next - 4) // excluding type and name
  }
}

function toHex0x (n: number, littleEndian = true, pad?: number) {
  return `0x${toHex(n, littleEndian, pad)}`
}

function toHex (n: number, littleEndian = true, pad?: number) {
  const chunks:number[] = []
  let i = 10
  while (n > 0) {
    chunks.push(n % 256)
    n = n >> 8
    if (i-- < 0)break
  }
  if (littleEndian === false) {
    if (pad) {
      return Buffer.from(chunks.reverse()).toString('hex').padEnd(pad * 2, '0')  
    }
    return Buffer.from(chunks.reverse()).toString('hex')
  } else {
    if (pad) {
      return Buffer.from(chunks).toString('hex').padStart(pad * 2, '0')  
    }
    return Buffer.from(chunks).toString('hex')
  }
}