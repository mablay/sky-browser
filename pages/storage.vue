<template>
  <drop-overlay
    @file="apk.open"
    type="application/vnd.android.package-archive"
    prompt='Drop APK here!'
    accept="✅"
    reject="Not an APK! ❌"
    :show="apk.fileDropRequired ? 'show' : 'auto'"
  />
  <div>
    <h1>{{ apk.fileId }}</h1>
    <div>
      files: {{ apk.files.length }}
    </div>
    <div>
      available files: {{ apk.availableFiles.length }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useApkStore } from '~/store/apk-store'

const apk = useApkStore()

</script>

<style scoped>
</style>
