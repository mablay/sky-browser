<template>
  <div class="page">
    <drop-overlay
      @file="apkStore.open"
      type="application/vnd.android.package-archive"
    />
    <div>
      <h1>{{ apkStore.fileId }}</h1>
      <div>
        files: {{ apkStore.files.length }}
      </div>
      <div>
        available files: {{ apkStore.availableFiles.length }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useApkStore } from '~/store/apk-store'

const apkStore = useApkStore()

</script>

<style scoped>
.page {
  height: 100vh;
  width: 100vw;
  background-color: skyblue;
  overflow: hidden;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
}

</style>
