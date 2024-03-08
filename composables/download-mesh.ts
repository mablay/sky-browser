import { Scene } from 'three'
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js'
import { parseMeshFile } from '~/lib/mesh/parse-mesh'
import { createMesh } from '~/lib/mesh/three-mesh'
import { useMeshStore } from '~/store/mesh-store'

export async function downloadMesh () {
  const meshStore = useMeshStore()
  console.log('download', meshStore.meshName)
  const filename = meshStore.meshName.split('/').pop()
  if (!filename) return
  const view = toRaw(meshStore.mesh) as DataView
  if (!view) return
  const { skyMesh } = parseMeshFile(view)
  const mesh = await createMesh(skyMesh)
  const scene = new Scene()
  scene.add(mesh)
  const exporter = new GLTFExporter()

  const options = { binary: true }

  exporter.parse(scene, gltf => {
    console.log('download GLTF:', gltf)
    const a = document.createElement('a')
    const file = new Blob([<ArrayBuffer>gltf], {type: 'model/gltf-binary'})
    a.href = URL.createObjectURL(file)
    a.download = `${filename}.gltf`
    a.click()
  }, console.error, options)
}