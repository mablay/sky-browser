import type { CacheEntry } from "~/lib/apk/apk-cache.js"
import { useApkStore } from "./apk-store.js"
import type { Mesh } from "three"

export const useMeshStore = defineStore('meshStore', () => {
  const assets = useAssets()
  const apk = useApkStore()
  const meshName = ref('AP13DuskGate_01')
  const mesh = ref<Mesh>()
  const meshes = shallowRef<CacheEntry[]>([])

  watch(apk, () => {
    const arr:CacheEntry[] = []
    for (const path of apk.files) {
      if (!path.endsWith('.mesh')) continue
      const filename = path.split('/').pop()
      if (!filename) continue
      const file = apk.apk[path]
      if (!file) continue
      // const name = filename?.substring(0, filename.length - 5)
      arr.push(file)
    }
    console.log('meshes:', arr.length)
    meshes.value = arr
  })

  async function selectMesh (name: string) {
    console.log('select mesh:', name)
    const filename = name.endsWith('.mesh') ? name : name.concat('.mesh')
    const entry = apk.apk[filename]
    if (entry === undefined) {
      console.warn(`No mesh for name: ${filename}!`)
      return
    }
    meshName.value = filename.slice(0, filename.length - 5)
    mesh.value = await assets.loadMesh(entry)
  }

  return { meshes, meshName, mesh, selectMesh }
})
