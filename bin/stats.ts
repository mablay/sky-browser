import { readFileSync } from 'fs'
import { createHistogram } from '../lib/util/histogram'
import statsOk from '../data/flags-ok.json'
import statsNok from '../data/flags-nok.json'

const red = (text: string) => `\x1b[31m${text}\x1b[0m`
const cyan = (text: string) => `\x1b[36m${text}\x1b[0m`
const green = (text: string) => `\x1b[32m${text}\x1b[0m`

// const file = readFileSync('data/stats.bin')
// const statsHeaderBytes = 0xB3 + 1

const col = Object.keys(statsOk[0]).filter(prop => typeof statsOk[0][prop] === 'number')
const K = col.length

const histOk = createHistogram(K)
const histNok = createHistogram(K)

for (const stat of statsOk) {
  for (let k = 0; k < K; k++) {
    const prop = col[k] as keyof typeof stat
    histOk.stats[k].push(stat[prop])
  }
}

for (const stat of statsNok) {
  for (let k = 0; k < K; k++) {
    const prop = col[k] as keyof typeof stat
    histNok.stats[k].push(stat[prop])
  }
}

// const N = Math.floor(file.byteLength / statsHeaderBytes)
// for (let i = 0; i < N; i++) {
//   const start = i * statsHeaderBytes
//   const end = (i + 1) * statsHeaderBytes
//   const type = file.readUint8(start)
//   const buffer = file.subarray(start + 1, end)
//   const ok = type === 255
//   if (ok) {
//     if (ok) console.log(cyan(buffer.subarray(0, 80).toString('hex')))
//     histOk.pushBuffer(buffer)
//   } else {
//     console.log(red(buffer.toString('hex')))
//     histNok.pushBuffer(buffer)
//   }
// }

for (let k = 0; k < K; k++) {
  console.log(
    `${histOk.stats[k].min}-${histOk.stats[k].max}`.padStart(7),
    `${histNok.stats[k].min}-${histNok.stats[k].max}`.padStart(7),
    col[k]
  )
}

// console.log(histOk.stats[68].hist, histNok.stats[68].hist)