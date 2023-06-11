<template>
  <Perspective ref="perspective" :scene="scene" />
</template>

<script setup lang="ts">
import { Perspective } from 'three-perspective'
import { loadSkyMesh, meshExampleScene } from '~/lib/mesh-scene'

const perspective = ref<InstanceType<typeof Perspective>>()

const scene = meshExampleScene()
loadSkyMesh('foo')
  .then(mesh => scene.add(mesh))
  // @ts-ignore
  .then(() => perspective.value?.render())

</script>

<style scoped>
</style>