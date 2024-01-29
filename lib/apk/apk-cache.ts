import * as idb from 'idb-keyval'
import { IdbEntry } from './idb-entry'
import { unzip } from './zip'
import { FileEntry } from './file-entry'

/** localStorage key to identify the currently stored APK file */
const SKY_CACHE_ID = 'skyCacheId'

/** used to store file meta information */
export const metaStore = idb.createStore('sky-meta', 'meta')
/** used to store file content */
export const apkStore = idb.createStore('sky-buffer', 'apk')
// export const idbStores = { apk: apkStore, meta: metaStore }

export interface ApkEntry {
  filename: string
  cached: boolean
  size: number
}

export interface CacheEntry extends ApkEntry {
  getData (): Promise<Uint8Array>
  getDataView (): Promise<DataView>
}

export type APK = Record<string, CacheEntry>

export type CacheFn = (entry: ApkEntry, value: ArrayBuffer) => Promise<void>

export function fileHash (file: File) {
  return `${file.name}:${file.size}:${file.lastModified}`
}

export function getApkId () {
  return localStorage.getItem(SKY_CACHE_ID) || ''
}

export function setApkId (fileId: string) {
  localStorage.setItem(SKY_CACHE_ID, fileId)
}

export async function apkFromFile (file: File, cache: APK = {}) {
  // check this file is already cached
  const cachedId = getApkId()
  const fileId = fileHash(file)
  if (cachedId !== fileId) {
    // invalidate cache
    cache = {}
  }
  
  const zipEntries = await unzip(file)
  const apk: APK = {}
  for await (const entry of zipEntries) {
    const cached = cache[entry.filename] !== undefined
    apk[entry.filename] = new FileEntry(entry, cached, cacheFile)
  }

  if (cachedId === fileId) return apk
  
  // update cache
  setApkId(fileId)
  const entries = Object.values(apk)
  console.log(`cache ${entries.length} file references...`)
  await idb.setMany(entries.map(e => [e.filename, {
    filename: e.filename,
    size: e.size,
    cached: e.cached
  }]), metaStore)
  console.log('cache done')
  return apk
}

export async function apkFromIdb () {
  const entries = await idb.values<ApkEntry>(metaStore)
  const apk: APK = {}
  for (const entry of entries) {
    apk[entry.filename] = new IdbEntry(entry)
  }
  return apk
}

/** write file to cache and update its metadata */
export async function cacheFile (entry: ApkEntry, buffer: ArrayBuffer) {
  entry.cached = true
  console.log('write to cache:', {
    entry,
    buffer
  })
  await Promise.all([
    idb.set(entry.filename, buffer, apkStore),  
    idb.set(entry.filename, {
      filename: entry.filename,
      size: entry.size,
      cached: entry.cached
    }, metaStore)
  ])
}

/** read file from cache */
export async function fileFromCache (filename: string) {
  return idb.get<ArrayBuffer>(filename, apkStore)
}

/** clear apk file buffers and meta info */
export function clearCache () {
  return Promise.all([
    idb.clear(apkStore),
    idb.clear(metaStore)
  ])
}