import { readdir } from "fs/promises"
import { meshDir } from "../../config"

export default defineEventHandler(async (event) => {
  const files = await readdir(meshDir, { withFileTypes: true })
  return files.filter(file => file.isFile() && file.name.endsWith('.mesh'))
    .map(file => file.name.substring(0, file.name.length - 5))
})