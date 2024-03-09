<template>
  <div class="sidebar">
    <div class="top-spacer"></div>
    <div>
      <div to="/" @click="$router.push('/')" class="btn btn-round">
        &lt;
      </div>
      <div @click="toggleList" class="btn">
        {{ toggleTitle }}
      </div>
      <!-- <div @click="event => $emit('download', event)" class="btn btn-icon">
        <Icon :icon="downloadSvg" :size="24" />
      </div> -->
    </div>
    <div class="mesh-list scroll-x">
      <div class="scroll-y">
        <div
          v-show="showList"
          v-for="(item, index) of items"
          :id="`asset-${index}`"
          @click="$emit('select', item.name)"
          :class="{active: item.name === selected}"
        >{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Asset } from '~/composables/useAssets'
import downloadSvg from '~/assets/download.svg'

const emit = defineEmits(['download', 'select'])

const props = defineProps<{
  selected?: string
  items: Asset[]
}>()

const showList = ref(true)
const toggleTitle = computed(() => showList.value ? 'Hide list' : 'Show list')
const data = computed(() => props.items.map(asset => asset))

function toggleList () {
  showList.value = !showList.value
}

onKeyStroke('ArrowDown', (e) => {
  e.preventDefault()
  if (!data.value) return
  const i = data.value.findIndex(asset => asset.name === props.selected)
  if (i < 0 || i >= data.value.length - 1) return
  // emit('update:modelValue', data.value[i + 1])
  emit('select', data.value[i + 1].name)
  document.getElementById(`mesh-${i}`)?.scrollIntoView({ block: 'center' })
})

onKeyStroke('ArrowUp', (e) => {
  e.preventDefault()
  if (!data.value) return
  const i = data.value.findIndex(asset => asset.name === props.selected)
  if (i < 1 || i >= data.value.length) return
  // emit('update:modelValue', data.value[i - 1])
  emit('select', data.value[i - 1].name)
  document.getElementById(`mesh-${i}`)?.scrollIntoView({ block: 'center' })
})


</script>

<style scoped>
.sidebar {
  display: flex;
  flex-flow: column nowrap;
  position: fixed;
  left: 0;
  top: 0;
  width: 200px;
  height: 100%;
  padding-left: 0;
  padding-right: 8px;
  background-color: #0004;
  color: white;
  user-select: none;
}
.top-spacer {
  height: 48px;
  width: 100%;
}
.btn {
  text-align: center;
  color: #FFF;
  /* color: deeppink; */
  display: inline-block;
  margin-left: 12px;
  margin-top: 12px;
  padding: 8px 12px 8px 12px;
  /* text-shadow: 0px 0px 4px #0004; */
  outline: 1px solid white;
  border-radius: 8px;
  /* width: 90px; */
  background-color: #FFF4;
  font-size: 18px;
}
.btn:hover {
  background-color: #FFF8;
}
.btn-round {
  border-radius: 50px;
  padding-right: 14px;
}
.btn-icon {
  border-radius: 50px;
  padding-right: 14px;
  margin: 0px 0px 0px 12px;
  padding: 6px;
  line-height: 0px;
  vertical-align: bottom;
}

.mesh-list {
  direction: rtl;
  overflow-y: scroll;
  padding-top: 16px;
  padding-bottom: 16px;
  /* mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,1), rgba(0,0,0,0)), linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,1), rgba(0,0,0,0)); */
  mask-image: linear-gradient(180deg, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%), linear-gradient(0deg, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%);
  mask-size: 100% 50%;
  mask-repeat: no-repeat;
  mask-position: bottom, top;
}

.scroll-y {
  direction: ltr;
  padding-left: 12px;  
}
.scroll-x {
  direction: ltr;
  padding-left: 12px;  
}

.active {
  background-color: skyblue;
  color: black;
}
</style>