<template>
  <div class="sidebar">
    <!-- <div>
      <div to="/" @click="$router.push('/')" class="btn btn-round">
        &lt;
      </div>
      <div @click="toggleList" class="btn">
        {{ toggleTitle }}
      </div>
    </div> -->
    <!-- <div @click="download" class="btn btn-icon">
      <Icon :icon="downloadSvg" :size="24" />
    </div> -->
    <div class="mesh-list scroll-x rtl">
      <div class="scroll-y ltr">
        <div
          v-show="showList"
          v-for="(name, index) of data"
          :key="name"
          :id="`mesh-${index}`"
          @click="() => meshStore.selectMesh(name)"
          :class="{active: name === meshStore.meshName}"
        >{{ name.split('/').pop()?.split('.mesh').shift() }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Mesh, Scene } from 'three'
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js'
import downloadSvg from '~/assets/download.svg'
import { parseMeshFile } from '~/lib/mesh/parse-mesh'
import { createMesh } from '~/lib/mesh/three-mesh'
import { useMeshStore } from '~/store/mesh-store'

const meshStore = useMeshStore()
const data = computed(() => meshStore.meshes.map(asset => asset.filename))

const emit = defineEmits(['update:modelValue'])
// const { loadMesh, selectedMeshAsset, meshes, meshName } = useAssets()

const showList = ref(true)
const toggleTitle = computed(() => showList.value ? 'Hide list' : 'Show list')

function toggleList () {
  showList.value = !showList.value
}

onKeyStroke('ArrowDown', async (e) => {
  e.preventDefault()
  if (!data.value) return
  const i = data.value.findIndex(name => name === meshStore.meshName)
  if (i < 0 || i >= data.value.length - 1) return
  // emit('update:modelValue', data.value[i + 1])
  meshStore.selectMesh(data.value[i + 1])
  document.getElementById(`mesh-${i+1}`)?.scrollIntoView({ block: 'center' })
})

onKeyStroke('ArrowUp', async (e) => {
  e.preventDefault()
  if (!data.value) return
  const i = data.value.findIndex(name => name === meshStore.meshName)
  if (i < 1 || i >= data.value.length) return
  // emit('update:modelValue', data.value[i - 1])
  meshStore.selectMesh(data.value[i - 1])
  document.getElementById(`mesh-${i-1}`)?.scrollIntoView({ block: 'center' })
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
  padding-top: 48px;
  padding-left: 0;
  padding-right: 8px;
  background-color: transparent;
  color: white;
  user-select: none;
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
  mask-image: linear-gradient(180deg, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%), linear-gradient(0deg, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%);
  mask-size: 100% 50%;
  mask-repeat: no-repeat;
  mask-position: bottom, top;
}

.scroll-y {
  direction: ltr;
  /* padding-left: 12px; */
  overflow-x: scroll;
}
.scroll-x {
  direction: ltr;
  padding-left: 12px;  
}

.active {
  background-color: skyblue;
  color: black;
}

.rtl {
  direction: rtl;
}
.ltr {
  direction: ltr;
}
</style>