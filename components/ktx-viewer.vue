<template>
  <Perspective ref="perspective" :scene="scene" :antialias="false" />
</template>

<script setup lang="ts">
import { Perspective } from 'three-perspective'
import useAssets from '~/composables/useAssets'
import { ktxExampleScene } from '~/lib/ktx/ktx'
import { Group } from 'three'

const { loadImage, selectedImageAsset } = useAssets()

const perspective = ref<InstanceType<typeof Perspective>>()

const scene = ktxExampleScene()
const group = new Group()
scene.add(group)

watch(selectedImageAsset, async () => {
  // @ts-ignore
  const { render } = perspective.value
  if (!render || !selectedImageAsset.value) return

  const mesh = await loadImage(selectedImageAsset.value.entry)

  group.clear()
  group.add(mesh)
  render()
})

</script>

<style scoped>
</style>