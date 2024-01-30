<template>
  <div v-show="showState" class="overlay">
    <div class="page">
      <div ref="dropZoneRef" class="dropZone" :class="dropAcceptance">
        <span class="dropText">{{ dropText }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDropZone } from '@vueuse/core'

const emit = defineEmits<{
  file: [file: File]
}>()

export interface DropOverlayProps {
  /** optional mime type of acceptable files.
   * Use `accept` and `reject` props to show validation response text */
  type?: string
  /** file drop indicator text */
  prompt: string
  /** file drop acceptable indicator text */
  accept: string
  /** file drop rejected indicator text */
  reject: string
  /**
   * controls when to show this overlay.  
   * hide: Prevents the overlay from being displayed.
   * show: Forces the overlay to be displayed.
   * auto: The overlay will be displayed while a file is dragged across the window. (default)
   */
  show: 'hide' | 'auto' | 'show'
}
const props = withDefaults(defineProps<DropOverlayProps>(), {
  prompt: 'Drop File',
  accept: 'OK',
  reject: 'Invalid!',
  show: 'auto'
})

/* --- refs --- */
const dropZoneRef = ref<HTMLDivElement>()
const dropAcceptance = ref<'dropWait'|'dropAccept'|'dropDeny'>('dropWait')
/** tracks if the overlay should be shown if `props.show = auto` */
const autoShow = ref(false)

/* --- computed --- */
const dropText = computed(() => {
  if (dropAcceptance.value === 'dropWait') return props.prompt
  if (dropAcceptance.value === 'dropAccept') return props.accept
  return props.reject
})

/* --- functions --- */
useEventListener(document, 'dragenter', () => autoShow.value = true)
const showState = computed(() => {
  if (props.show === 'hide') return false
  if (props.show === 'show') return true
  return autoShow.value
})

async function onDrop(files: File[] | null) {
  autoShow.value = false
  dropAcceptance.value = 'dropWait'
  if (files === null) return
  if (!checkDropAcceptance(files.map(file => file.type))) return
  const file = files[0]
  emit('file', file)
}

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
.overlay {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #87ceeb;
  opacity: 0.8;
  overflow: hidden;
}
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