<template>
  <v-app-bar :elevation="2" density="compact">
    <v-app-bar-title>Sky Browser</v-app-bar-title>

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
</style>