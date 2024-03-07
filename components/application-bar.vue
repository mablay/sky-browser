<template>
  <v-app-bar :elevation="0" color="#2220" density="compact">
    <v-app-bar-title class="min100">
      <v-btn variant="tonal">Hide List</v-btn>
    </v-app-bar-title>

    <v-spacer></v-spacer>
    {{ apk.filename }}
    <span class="text-grey pl-2">
      ({{ apk.availableFiles.length }} / {{ apk.files.length }})
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
const apk = useApkStore()
</script>

<style scoped>
.min100 {
  /* min-width: 80px; */
  flex: 1 0 100px;
}
</style>