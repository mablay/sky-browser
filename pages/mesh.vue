<template>
  <div class="app">
    <MeshList v-if="meshStore.meshes.length && uiStore.showSidebar" v-model="meshStore.meshName" />
    <client-only>
      <MeshViewer v-if="apk.apk" :mesh="meshStore.meshName" />
    </client-only>
  </div>
</template>

<script setup lang="ts">
import { useApkStore } from '~/store/apk-store'
import { useMeshStore } from '~/store/mesh-store'
import { useUiStore } from '~/store/ui-store'

const meshStore = useMeshStore()
const uiStore = useUiStore()
const apk = useApkStore()

</script>

<style scoped>
.app {
  width: 100%;
  height: 100%;
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