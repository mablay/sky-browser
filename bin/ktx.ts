import { loadKtx } from '../lib/ktx'
import { ktxUrl } from '../config'

loadKtx('http://localhost:3000' + ktxUrl).then(image => {
  console.log('image:', image)
})

