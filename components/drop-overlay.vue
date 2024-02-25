<template>
  <div v-show="showState" class="overlay">
    <div class="page">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineExpose({
  /** manually trigger the overlay to hide */
  hide: () => autoShow.value = false
})

export interface DropOverlayProps {
  /**
   * controls when to show this overlay.  
   * hide: Prevents the overlay from being displayed.
   * show: Forces the overlay to be displayed.
   * auto: The overlay will be displayed while a file is dragged across the window. (default)
   */
  show: 'hide' | 'auto' | 'show'
}

const props = withDefaults(defineProps<DropOverlayProps>(), {
  show: 'auto'
})

/* --- refs --- */
/** tracks if the overlay should be shown if `props.show = auto` */
const autoShow = ref(false)

/* --- functions --- */
useEventListener(document, 'dragenter', () => autoShow.value = true)
const showState = computed(() => {
  if (props.show === 'hide') return false
  if (props.show === 'show') return true
  return autoShow.value
})
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
</style>