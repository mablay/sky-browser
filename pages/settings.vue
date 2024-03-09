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
          <th>Available Files</th>
          <th>Available Size</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><nuxt-link to="/mesh">Meshes</nuxt-link></td>
          <td>{{ meshes.length }}</td>
          <td>{{ Math.round(meshes.reduce((sum, cur) => sum + cur.size, 0) / 1e6) }} Mb</td>
          <td>{{ meshes.filter(f => f.cached).length }}</td>
          <td>{{ Math.round(meshes.filter(f => f.cached).reduce((sum, cur) => sum + cur.size, 0) / 1e6) }} Mb</td>
          <td>
            <v-btn v-if="apk.hasFile" icon="mdi-content-save" @click="() => cache('meshes')" />
          </td>
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

async function cache (type: 'meshes' | 'textures' | 'audio') {
  if (type === 'meshes') {
    for (const entry of meshes.value) {
      if (entry.cached) continue
      await entry.getData()
    }
  }
}
</script>

<style scoped>
</style>