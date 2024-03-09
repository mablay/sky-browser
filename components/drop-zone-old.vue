<template>
<div
  @drop.prevent="dropApk"
  @dragover.prevent
  class="dropzone"
>
{{ meshes.length ? `Loaded ${meshes.length} meshes` : 'Drop APK' }}
</div>

</template>

<script setup lang="ts">
const { dropApk, meshes } = useAssets()
</script>

<style scoped>
.dropzone {
  width: 100%;
  height: 100%;
  border: 5px dashed white;
  background-color: #FFF2;
  font-size: 48px;
  font-family: Arial Rounded MT Bold,Helvetica Rounded,Arial,sans-serif; 
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>