<template>
  <Perspective ref="perspective" :scene="scene" />
</template>

<script setup lang="ts">
import { Perspective } from 'three-perspective'
import { ktxExampleScene, ktxImage } from '@/lib/ktx'
import { ktxName, ktxUrl } from '@/config'

const perspective = ref<InstanceType<typeof Perspective>>()

const scene = ktxExampleScene()
ktxImage(ktxUrl)
  .then(image => scene.add(image))
  .then(() => {
    // @ts-ignore
    perspective.value?.render()
  })

// trigger some server side stuff

const info = await useFetch(`/api/ktx?name=${ktxName}t`)
console.log('info:', info)

</script>

<style scoped>
</style>