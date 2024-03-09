import { BlobWriter, type Entry } from '@zip.js/zip.js'
import type { CacheEntry, CacheFn } from './apk-cache'

export class FileEntry implements CacheEntry {
  entry: Entry
  filename: string
  size: number
  cached: boolean
  cacheFn: CacheFn

  constructor (entry: Entry, cached: boolean, cacheFn: CacheFn) {
    this.entry = entry
    this.filename = entry.filename
    this.size = entry.uncompressedSize
    this.cached = cached
    this.cacheFn = cacheFn
  }
  async getBuffer () {
    if (this.entry.getData === undefined) {
      throw new Error(`Missing data in entry ${this.filename}!`)
    }
    const blobWriter = new BlobWriter()
    const blob = await this.entry.getData(blobWriter)
    const buffer = await blob.arrayBuffer()
    await this.cacheFn(this, buffer)
    return buffer
  }
  getDataView () {
    return this.getBuffer().then(buffer => new DataView(buffer))
  }
  getData () {
    return this.getBuffer().then(buffer => new Uint8Array(buffer))
  }
}
