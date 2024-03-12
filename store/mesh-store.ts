import type { CacheEntry } from "~/lib/apk/apk-cache.js"
import { useApkStore } from "./apk-store.js"

export const useMeshStore = defineStore('meshStore', () => {
  // const assets = useAssets()
  const apk = useApkStore()
  // const meshName = ref('AP13DuskGate_01')
  const meshName = useLocalStorage('sky-mesh-name', 'assets/Data/Meshes/Bin/AP13DuskGate_01.mesh')
  const mesh = shallowRef<DataView>()
  const meshes = shallowRef<CacheEntry[]>([])

  watch(apk, () => {
    console.log('[watch] apk')
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
    if (arr.length > 0) {
      selectMesh(meshName.value)
    }
  })

  async function selectMesh (name: string) {
    console.log('select mesh:', name)
    const filename = name.endsWith('.mesh') ? name : name.concat('.mesh')
    // console.log(toRaw(apk.apk[filename]))
    const entry = apk.apk[filename]
    if (entry === undefined) {
      console.warn(`No mesh for name: ${filename}!`)
      return
    }
    try {
      mesh.value = await entry.getDataView()
      meshName.value = filename
    } catch (error) {
      console.error(error)      
    }

    // const view = await entry.getDataView()
    // const { header, skyMesh } = parseMeshFile(view)
    // console.log({ header, skyMesh })
    // mesh.value = createMesh(skyMesh)
  }

  return { meshes, meshName, mesh, selectMesh }
})
