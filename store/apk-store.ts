import { apkFromFile, apkFromIdb, clearCache, type APK, fileHash, getApkId } from "~/lib/apk/apk-cache"

export const useApkStore = defineStore('apkStore', () => {
  /**
   * indicates that the store requires data
   * unavailable in the cache and the user
   * is supposed to drop the according file
   * to provide data.  
   * 
   * Typical use cases:  
   *  - Empty cache  
   *  - User wants to access a particular uncached resource
   */
  const fileDropRequired = ref(false)
  /** id of the currently used APK */
  const fileId = ref(getApkId())
  const apk = ref<APK>({})
  /** indicating the presence of a dropped APK file */
  const usingFile = ref(false)

  const files = computed(() => Object.keys(apk.value))
  const availableFiles = computed(() => {
    if (usingFile.value) return files.value
    return Object.values(apk.value)
      .filter(entry => entry.cached)
      .map(entry => entry.filename)
  })

  apkFromIdb().then(value => {
    apk.value = value
    fileDropRequired.value = (availableFiles.value.length === 0)
  })

  async function open (file: File) {
    fileDropRequired.value = false
    apk.value = await apkFromFile(file, apk.value)
    usingFile.value = true
    fileId.value = fileHash(file)
  }

  return {
    fileDropRequired,
    fileId,
    apk,
    files,
    availableFiles,
    clearCache,
    open
  }
})
