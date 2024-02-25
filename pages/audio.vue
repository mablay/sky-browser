<template>
  <div>
    <h1>Audio</h1>
    <div class="row">
      <div class="col">
        <div v-for="file of audioFiles" @click="() => selectAudioFile(file)">
          {{ file.name }}
        </div>
      </div>
      <div v-if="currentFile" class="col">
        <h4>{{ currentFile.name }}</h4>
        <div>
          <div>path: {{ currentFile.bank }}</div>
          <div>streams: {{ currentFile.streams }}</div>
          <div>assets: {{ currentFile.assets }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useApkStore } from '~/store/apk-store'
import { loadAudioBank, type AudioResource } from '~/lib/audio/vgmstream/index'

const currentFile = ref<AudioFile>()

interface AudioFile {
  name: string
  bank?: string
  assets?: string
  streams?: string
}

const apk = useApkStore()
const audioFiles = computed(() => {
  const files: Record<string, AudioFile> = {}
  for (const file of apk.availableFiles) {
    if (!file.startsWith('assets/Data/Audio/')) continue
    const filename = file.split('/').pop()
    if (filename === undefined) continue
    const [name, type] = filename.split('.')
    if (name === undefined || type === undefined) continue
    files[name] = files[name] ?? { name }
    if (type === 'bank') files[name].bank = file
    if (type === 'assets') files[name].assets = file
    if (type === 'streams') files[name].streams = file
  }
  return Object.values(files)
})

async function selectAudioFile (file: AudioFile) {
  currentFile.value = file
  const resource: AudioResource = {
    assets: await apk.apk[file.assets!].getData(),
    bank: await apk.apk[file.bank!].getData(),
    streams: await apk.apk[file.streams!].getData(),
  }
  loadAudioBank(resource)
}
</script>

<style scoped>
.row {
  display: flex;
  flex-flow: row nowrap;
  /* justify-content: space-evenly; */
}
.col {
  display: flex;
  flex-flow: column nowrap;
  /* justify-content: center; */
}

</style>