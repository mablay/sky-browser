<template>
  <Perspective ref="perspective" :scene="scene" />
</template>

<script setup lang="ts">
import { Perspective } from 'three-perspective'
import { ACESFilmicToneMapping, EquirectangularReflectionMapping, Group, Sphere } from 'three'
import { meshExampleScene } from '~/lib/mesh/mesh-scene'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'

const perspective = ref<InstanceType<typeof Perspective>>()

const { loadMesh, selectedMeshAsset, meshes, meshName } = useAssets()

const { scene, cubeCamera, cubeRenderTarget } = meshExampleScene()
const group = new Group()
scene.add(group)

watch([meshes, meshName], async () => {
  const asset = toRaw(selectedMeshAsset.value)
  if (!asset) return
  console.log('Loading asset from APK:', asset)
  // const mesh = await loadSkyMesh(props.mesh, cubeRenderTarget)
  const mesh = await loadMesh(asset.entry, cubeRenderTarget)

  mesh.geometry.computeBoundingSphere()
  const { center, radius } = <Sphere>mesh.geometry.boundingSphere
  mesh.geometry.translate(-center.x, -center.y, -center.z)
  mesh.scale.divideScalar(radius / 5)
  console.log('loaded mesh:', asset.name, { center, radius, mesh })
  group.clear()
  group.add(mesh)
  // @ts-ignore
  const { renderer, render } = perspective.value ?? {}
  if (!renderer || !render) return
  cubeCamera.update(renderer, scene )
  render()
  
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

  // equirectangular HDR image from https://polyhaven.com/a/kloofendal_48d_partly_cloudy_puresky
  new RGBELoader().setPath('/').load('kloofendal_48d_partly_cloudy_puresky_1k.hdr', function ( texture ) {
    texture.mapping = EquirectangularReflectionMapping
    scene.background = texture;
    scene.environment = texture;
    render()
  })


})
</script>

<style scoped>
</style>