<template>
  <v-app-bar :elevation="0" color="#2220" density="compact">
    <v-app-bar-title v-if="uiStore.showSidebar" class="title">
      <v-btn icon="mdi-chevron-left" @click="() => uiStore.showSidebar = false" variant="tonal" density="comfortable" />
      <v-btn icon="mdi-download" variant="tonal" density="comfortable" class="ml-4" @click="downloadMesh"></v-btn>
    </v-app-bar-title>
    <v-app-bar-title v-else class="title">
      <v-btn icon="mdi-chevron-right" @click="() => uiStore.showSidebar = true" variant="tonal" density="comfortable" />
    </v-app-bar-title>

    <v-spacer></v-spacer>
    <span class="d-none d-sm-inline">
      {{ apk.filename }}
      <span class="text-grey pl-2">
        ({{ apk.availableFiles.length }} / {{ apk.files.length }})
      </span>
      </span>
    <v-spacer></v-spacer>

    <v-btn density="comfortable" icon="mdi-import" title="open APK" />
    <v-btn density="comfortable" icon="mdi-image" title="Textures" to="ktx" />
    <v-btn density="comfortable" icon="mdi-cube-scan" title="Meshes" to="mesh" />
    <v-btn density="comfortable" icon="mdi-music" title="Music" to="audio" />
    <v-btn density="comfortable" icon="mdi-cog" title="Settings" to="settings" />
  </v-app-bar>
</template>

<script setup lang="ts">
import { useApkStore } from '~/store/apk-store'
import { downloadMesh } from '~/composables/download-mesh'
import { useUiStore } from '~/store/ui-store'
const apk = useApkStore()
const uiStore = useUiStore()
</script>

<style scoped>
.title {
  /* min-width: 80px; */
  flex: 1 0 160px;
}
button:hover {
  background-color: #FFF4;
}
</style>