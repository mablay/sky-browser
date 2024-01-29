import { BlobReader, ZipReader, type Entry } from "@zip.js/zip.js"

export function unzip (file: File) {
  console.log('unzip:', file.name, 'byteLength:', file.size)
  const zipReader = new ZipReader<Entry>(new BlobReader(file))
  return zipReader.getEntriesGenerator()
}