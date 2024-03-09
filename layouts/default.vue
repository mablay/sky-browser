<template>
  <v-main class="no-top">
    <!-- <ApplicationBar /> -->
    <drop-overlay
      ref="overlay"
      :show="apk.fileDropRequired ? 'show' : 'auto'"
    >
      <DropZone
        @file="apk.open"
        @drop="drop"
        type="application/vnd.android.package-archive"
        prompt='Drop APK here!'
        accept="✅"
        reject="Not an APK! ❌"
      />
    </drop-overlay>
    <!-- <v-overlay v-model="showOverlay">

    </v-overlay> -->
    <slot></slot>
  </v-main>
</template>

<script setup lang="ts">
import { useEventListener } from '@vueuse/core'

import { useApkStore } from '~/store/apk-store'
const apk = useApkStore()
const showOverlay = ref(false)
const overlay = ref()

function drop (accepted: boolean) {
  console.log({ accepted })
  overlay.value?.hide()
}

useEventListener(document, 'dragenter', (evt) => {
  console.log('dragenter:', evt)
  showOverlay.value = true
})

useEventListener(document, 'dragend', (evt) => {
  console.log('dragend:', evt)
  showOverlay.value = false
})

</script>

<style scoped>
.no-top {
  padding-top: 0;
}
</style>