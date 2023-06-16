import { readFileSync } from 'fs'
// @ts-ignore
import { readMediaAttributes } from 'leather'
import { ktxPath, ktxUrl } from '../../config'
import { parseKtx } from '../../lib/ktx/ktx'
// import { writeFile } from 'fs/promises'

export function ktxInfo (path: string) {
  console.log('ktx-parse:', path)
  const { width, height, size, mime } = readMediaAttributes(path)
  console.log({ width, height, size, mime })

  // const buffer = readFileSync(path)
  // console.log('read:', buffer.byteLength, 'bytes')
  // const container = read(buffer)
  // console.log('parsed:', container)
  return { width, height, size, mime }
}


export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const name = query.name
  console.log('[ktx] name:', name)
  const info = ktxInfo(ktxPath)

  const parsed = await parseKtx(ktxUrl)
  // @ts-ignore
  // writeFile('foo.png', parsed.mipmaps[0].data)
  return { info, parsed }
})