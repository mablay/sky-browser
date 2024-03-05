<template>
  <div ref="dropZoneRef" class="dropZone" :class="dropAcceptance">
    <span class="dropText">{{ dropText }}</span>
  </div>
</template>

<script setup lang="ts">
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
}

const emit = defineEmits<{
  file: [file: File]
  // dropx: [accepted: boolean]
}>()
const props = withDefaults(defineProps<DropOverlayProps>(), {
  prompt: 'Drop File',
  accept: 'OK',
  reject: 'Invalid!',
})

/* --- refs --- */
const dropZoneRef = ref<HTMLDivElement>()
const dropAcceptance = ref<'dropWait'|'dropAccept'|'dropDeny'>('dropWait')

/* --- computed --- */
const dropText = computed(() => {
  if (dropAcceptance.value === 'dropWait') return props.prompt
  if (dropAcceptance.value === 'dropAccept') return props.accept
  return props.reject
})

/* --- functions --- */
async function onDrop(files: File[] | null) {
  dropZoneRef.value?.slot
  dropAcceptance.value = 'dropWait'
  if (files === null) return
  if (!checkDropAcceptance(files.map(file => file.type))) return
  const file = files[0]
  emit('file', file)
}

useDropZone(dropZoneRef, {
  onDrop,
  dataTypes (files) {
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
.dropZone {
  flex-grow: 1;
  display: flex;
  height: calc(100% - 4em);
  width: calc(100% - 4em);
  padding: 1em;
  border-radius: 5em;
  border: 1em skyblue dashed;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.dropAccept { border-color: #50bb44; }
.dropWait { border-color: #48B; }
.dropDeny { border-color: #bb4444; }
.dropText {
  pointer-events:none;
  user-select: none;
  font-family: 'Arial Rounded MT Bold', 'Helvetica Rounded', Arial, sans-serif;
  font-size: 20px; /* fallback */
  font-size: 2em;
}
</style>