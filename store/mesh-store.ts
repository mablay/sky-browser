import type { CacheEntry } from "~/lib/apk/apk-cache"
import { useApkStore } from "./apk-store"

export const useMeshStore = defineStore('meshStore', () => {
  const apk = useApkStore()
  const meshName = ref('AP13DuskGate_01')
  const mesh = ref<string|undefined>()

  const meshes = computed(() => {
    const arr:CacheEntry[] = []
    for (const entry of Object.values(apk.apk)) {
      if (!entry.filename.endsWith('.mesh')) continue
      const filename = entry.filename.split('/').pop()
      if (!filename) continue
      const name = filename?.substring(0, filename.length - 5)
      arr.push(entry)
    }
    return arr
  })

  function selectMesh (name: string) {
    const filename = name.endsWith('.mesh') ? name : name.concat('.mesh')
    const entry = apk.apk[filename]
    if (entry === undefined) {
      console.warn(`No mesh for name: ${filename}!`)
      return
    }
    meshName.value = filename.slice(0, filename.length - 5)
    mesh.value = 'foo'
  }

  return { meshes, meshName, mesh, selectMesh }
})
