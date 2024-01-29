<template>
  <div class="page">
    <div ref="dropZoneRef" class="dropZone" :class="dropAcceptance">
      <span class="dropText">{{ dropText }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDropZone } from '@vueuse/core'

const emit = defineEmits<{
  file: [file: File]
}>()

export interface DropOverlayProps {
  type?: string
}
const props = withDefaults(defineProps<DropOverlayProps>(), {})

const dropZoneRef = ref<HTMLDivElement>()

async function onDrop(files: File[] | null) {
  dropAcceptance.value = 'dropWait'
  if (files === null) return
  if (!checkDropAcceptance(files.map(file => file.type))) return
  const file = files[0]
  emit('file', file)
}

const dropAcceptance = ref<'dropWait'|'dropAccept'|'dropDeny'>('dropWait')
const dropText = computed(() => {
  if (dropAcceptance.value === 'dropWait') return 'Drop APK here!'
  if (dropAcceptance.value === 'dropAccept') return '✅'
  return 'Not an APK! ❌'
})

useDropZone(dropZoneRef, {
  onDrop,
  dataTypes (files) {
    // console.log('dataTypes:', files)
    if (checkDropAcceptance(files)) {
      dropAcceptance.value = 'dropAccept'
      return true
    } else {
      dropAcceptance.value = 'dropDeny'
      return true
    }
  },
  onLeave: () => dropAcceptance.value = 'dropWait'
})

function checkDropAcceptance (files: readonly string[]) {
  if (props.type === undefined) return true
  return files.length === 1 && files[0] === props.type
}
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
.dropZone {
  display: flex;
  height: calc(100% - 4em);
  width: calc(100% - 4em);
  border-radius: 5em;
  border: 1em skyblue dashed;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.dropAccept { border-color: green; }
.dropWait { border-color: #48B; }
.dropDeny { border-color: red; }
.dropText {
  pointer-events:none;
  user-select: none;
  font-family: 'Arial Rounded MT Bold', 'Helvetica Rounded', Arial, sans-serif;
  font-size: 20px; /* fallback */
  font-size: 10vw;
}
</style>