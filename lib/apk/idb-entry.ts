import { get, type UseStore } from 'idb-keyval'
import { apkStore, type ApkEntry, type CacheEntry } from './apk-cache'

export class IdbEntry implements CacheEntry {
  filename: string
  size: number
  cached: boolean

  constructor (entry: ApkEntry) {
    this.filename = entry.filename
    this.size = entry.size
    this.cached = entry.cached
  }

  getDataView(): Promise<DataView> {
    return this.getData().then(buffer => new DataView(buffer.buffer))
  }

  async getData () {
    const buffer = await get<Uint8Array>(this.filename, apkStore)
    if (buffer === undefined) throw new Error(`Missing value for key: "${this.filename}"`)
    return buffer
  }
}
