import assert from 'assert'
import { readFileSync, writeFileSync } from 'fs'

export async function readLevel (path: string) {
  const file = readFileSync(path)
  const view = new DataView(file.buffer, 0, file.byteLength)
  const header = file.subarray(0, 4).toString()
  const version = view.getUint32(4, true)
  const namesOffset = view.getUint32(0x20, true)
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

  for (let i = 0; i < 100; i++) {
    const node = readBstNode(file, offset)
    if (node === undefined) break
    offset = node.offset + 1
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
  })
  nodes.sort((a, b) => a.type - b.type)
  for (const node of nodes) {
    if (node.type !== 9) continue
    console.log(node.offset, node.name.padEnd(20), node.type, node.bytes.subarray(-35))
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
  const index = buffer.indexOf('BstNode_', offset + 4)
  if (index < 0) return
  const type = buffer.readUInt32LE(index - 4)
  const bstName = readString(buffer, index)
  const next = buffer.indexOf('BstNode_', index + 1)
  if (next < 0) throw new Error('NYI proper BstNode parser!')
  return {
    type,
    name: bstName.string,
    offset: index - 4,
    bytes: buffer.subarray(index + bstName.byteLength, next - 4)
  }
}
