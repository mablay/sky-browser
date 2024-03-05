<template>
  <v-container>
    <h2>Settings</h2>
    <h3>File: {{ apk.filename ?? 'no file!' }}</h3>
    <v-table>
      <thead>
        <tr>
          <th>Datatype</th>
          <th>Total Files</th>
          <th>Total Size</th>
          <th>Cached Files</th>
          <th>Cached Size</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Meshes</td>
          <td>{{ meshes.length }}</td>
          <td>{{ Math.round(meshes.reduce((sum, cur) => sum + cur.size, 0) / 1e6) }} Mb</td>
          <td>{{ meshes.filter(f => f.cached).length }}</td>
          <td>{{ Math.round(meshes.filter(f => f.cached).reduce((sum, cur) => sum + cur.size, 0) / 1e6) }} Mb</td>
        </tr>
        <tr>
          <td>Textures</td>
          <td>{{ textures.length }}</td>
          <td>{{ Math.round(textures.reduce((sum, cur) => sum + cur.size, 0) / 1e6) }} Mb</td>
          <td>{{ textures.filter(f => f.cached).length }}</td>
          <td>{{ Math.round(textures.filter(f => f.cached).reduce((sum, cur) => sum + cur.size, 0) / 1e6) }} Mb</td>
        </tr>
        <tr>
          <td>Audio</td>
          <td>{{ audio.length }}</td>
          <td>{{ Math.round(audio.reduce((sum, cur) => sum + cur.size, 0) / 1e6) }} Mb</td>
          <td>{{ audio.filter(f => f.cached).length }}</td>
          <td>{{ Math.round(audio.filter(f => f.cached).reduce((sum, cur) => sum + cur.size, 0) / 1e6) }} Mb</td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script setup lang="ts">
import { useApkStore } from '~/store/apk-store'
const apk = useApkStore()

const meshes = computed(() => Object.values(apk.apk).filter(f => f.filename.endsWith('.mesh')))
const textures = computed(() => Object.values(apk.apk).filter(f => f.filename.endsWith('.ktx')))
const audio = computed(() => Object.values(apk.apk).filter(f => f.filename.endsWith('.bank')))
</script>

<style scoped>
</style>