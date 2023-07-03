import { readFileSync } from 'fs'
import { read } from 'ktx-parse'
import sharp from 'sharp'
// import * as ktx2 from 'ktx2-encoder'
// console.log('ktx2:', ktx2)

const [path, dst] = process.argv.slice(2)
const data = readFileSync(path)
const container = read(data)
const buffer = container.levels[0].levelData
const { pixelWidth, pixelHeight } = container

sharp(buffer, {
  raw: {
    channels: 4,
    width: pixelWidth,
    height: pixelHeight
  }
}).png()
  .toFile(dst)
  .catch(console.error)

  // .toBuffer()
  // .then(data => {
  //   const res = encodeKTX2(data)
  //   console.log('res:', res)
  // })
