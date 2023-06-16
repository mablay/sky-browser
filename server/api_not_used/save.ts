import { createWriteStream } from "fs"
import { finished } from "stream/promises"

export default defineEventHandler(async (event) => {
  const stream = event.node.req.pipe(createWriteStream('saved-file.bmp'))
  await finished(stream)
  return true
})