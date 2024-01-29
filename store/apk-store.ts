import { apkFromFile, apkFromIdb, clearCache, type APK, fileHash, getApkId } from "~/lib/apk/apk-cache"

export const useApkStore = defineStore('apkStore', () => {
  /** id of the currently used APK */
  const fileId = ref(getApkId())
  const apk = ref<APK>({})
  /** indicating the presence of a dropped APK file */
  const usingFile = ref(false)

  apkFromIdb().then(value => apk.value = value)

  async function open (file: File) {
    apk.value = await apkFromFile(file, apk.value)
    usingFile.value = true
    fileId.value = fileHash(file)
  }

  const files = computed(() => Object.keys(apk.value))
  const availableFiles = computed(() => {
    if (usingFile.value) return files.value
    return Object.values(apk.value)
      .filter(entry => entry.cached)
      .map(entry => entry.filename)
  })

  return {
    fileId,
    apk,
    files,
    availableFiles,
    clearCache,
    open
  }
})
