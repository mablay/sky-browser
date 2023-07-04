import { readdir } from "fs/promises"
// import { imageDir } from "../../config"

export default defineEventHandler(async (event) => {
  // const files = await readdir(imageDir, { withFileTypes: true })
  // return files.filter(file => file.isFile() && file.name.endsWith('.ktx'))
  //   .map(file => ({ filename: file.name, name: file.name.substring(0, file.name.length - 4) })) 
  return []
})