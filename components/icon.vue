<template>
  <img :src="icon ?? ''" :style="style"/>
</template>

<script setup lang="ts">
const props = defineProps<{
  icon: string
  size?: number
}>()

const style = computed(() => ({
  width: `${props.size ?? 20}px`,
  height: `${props.size ?? 20}px`,
}))
</script>

<style scoped>
</style>

