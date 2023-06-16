<template>
  <Perspective ref="perspective" :scene="scene" />
</template>

<script setup lang="ts">
import { Perspective, entities } from 'three-perspective'
import { ktxExampleScene, ktxImage } from '~/lib/ktx/ktx'
import { ktxUrl } from '@/config'

const perspective = ref<InstanceType<typeof Perspective>>()

const scene = ktxExampleScene()
scene.add(entities.createBox([0, 0, 1]))

// trigger some server side stuff

// const info = await $fetch(`/api/ktx?name=${ktxName}t`)
// console.log('info:', info)

onMounted(() => {
  // @ts-ignore
  const { renderer } = perspective.value
  if (!renderer) throw new Error('Missing renderer!')
  // const ext = renderer.getExtension("WEBGL_compressed_texture_etc1")
  // console.log('ext:', ext)
  ktxImage(ktxUrl, renderer)
    .then(image => scene.add(image))
    .then(() => {
      // @ts-ignore
      perspective.value?.render()
    })

})

</script>

<style scoped>
</style>