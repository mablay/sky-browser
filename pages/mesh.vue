<template>
  <div class="app">
    <MeshList v-if="meshes.length" v-model="meshName" />
    <client-only>
      <MeshViewer :mesh="meshName" />
    </client-only>
  </div>
  <div v-if="meshes.length === 0" class="overlay">
    <div class="inlay">
      <DropZone />
    </div>
  </div>
</template>

<script setup lang="ts">
// const meshName = ref<string>('AP13DuskGate_01')
// const meshName = ref<string>('ColosseumMerged_03')
const { meshes, meshName } = useAssets()

</script>

<style scoped>
.app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
.viewer {
  flex: 1;
  height: 100%;
}

.overlay {
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: #0004;
}

.inlay {
  position: absolute;
  left: 5vw;
  top: 5vh;
  height: 90vh;
  width: 90vw;
}

</style>