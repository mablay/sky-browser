<template>
  <Perspective ref="perspective" :scene="scene" />
</template>

<script setup lang="ts">
import { Perspective } from 'three-perspective'
import { ACESFilmicToneMapping, EquirectangularReflectionMapping, Group, Sphere } from 'three'
import { meshExampleScene } from '~/lib/mesh/mesh-scene'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'
import { useMeshStore } from '~/store/mesh-store.js'
import { parseMeshFile } from '~/lib/mesh/parse-mesh'
import { createMesh } from '~/lib/mesh/three-mesh'

const config = useRuntimeConfig()

const perspective = ref<InstanceType<typeof Perspective>>()

const meshStore = useMeshStore()
// const { loadMesh, selectedMeshAsset, meshes, meshName } = useAssets()

const { scene, cubeCamera, cubeRenderTarget } = meshExampleScene()
const group = new Group()
scene.add(group)

watch(() => meshStore.mesh, async () => {
  try {
    // console.log('[watch] meshStore.mesh')
    const view = toRaw(meshStore.mesh) as DataView
    if (!view) return
    // console.clear()
    const { header, skyMesh } = parseMeshFile(view)
    console.log({ header, skyMesh })
    const mesh = await createMesh(skyMesh)
      
    // const mesh = toRaw(meshStore.mesh)
    if (!mesh) return
    mesh.geometry.computeBoundingSphere()
    const { center, radius } = <Sphere>mesh.geometry.boundingSphere
    mesh.geometry.translate(-center.x, -center.y, -center.z)
    mesh.scale.divideScalar(radius / 5)
    // console.log('[ThreeJS]', meshStore.meshName.split('/').pop(), { radius, center, mesh })
    group.clear()
    group.add(mesh)
    // @ts-ignore
    const { renderer, render } = perspective.value ?? {}
    if (!renderer || !render) return
    cubeCamera.update(renderer, scene )
    render()
  } catch (error) {
    console.error(error)
  }
}, { immediate: true })

onMounted(() => {
  // @ts-ignore
  const { orbit, render, renderer } = perspective.value
  orbit.object.position.set(-6, 10, -10)
  orbit.target.set(0, 0, 0)
  orbit.update()
  render()
  renderer.toneMapping = ACESFilmicToneMapping
  // import('three/examples/jsm/webxr/VRButton').then(({ VRButton }) => {
  //   if (!perspective.value) throw new Error('Missing Perspective!')
  //   renderer.xr.enabled = true
  //   perspective.value.$el.appendChild(VRButton.createButton(renderer))
  //   // renderer.setAnimationLoop(render)
  // })

  console.log('baseURL:', config.app.baseURL)
  // equirectangular HDR image from https://polyhaven.com/a/kloofendal_48d_partly_cloudy_puresky
  new RGBELoader().setPath(config.app.baseURL).load('kloofendal_48d_partly_cloudy_puresky_1k.hdr', function ( texture ) {
    texture.mapping = EquirectangularReflectionMapping
    scene.background = texture;
    scene.environment = texture;
    render()
  })
})

// onBeforeUnmount(() => {
//   console.log('renderer:', perspective.value)
//   // @ts-ignore
//   perspective.value?.renderer?.dispose()
// })
</script>

<style scoped>
</style>