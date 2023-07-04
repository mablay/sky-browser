<template>
  <div class="app">
    <KtxViewer />
    <client-only>
      <Sidebar
        v-if="images.length"
        :items="images"
        :selected="imageName"
        @select="name => imageName = name"
      />
    </client-only>
  </div>
  <div v-if="images.length === 0" class="overlay">
    <div class="inlay">
      <DropZone />
    </div>
  </div>
</template>

<script setup lang="ts">
const { loadImageList, images, imageName } = useAssets()

// onMounted(loadImageList)
</script>

<style scoped>
.container {
  padding: 20px;
  color: white;
}
a {
  text-decoration: none;
  color: skyblue;
}
.pt-2 {
  padding-top: 8px;
}

.app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
.viewer {
  flex: 1;
  height: 100%;
}

.overlay {
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: #0004;
}

.inlay {
  position: absolute;
  left: 5vw;
  top: 5vh;
  height: 90vh;
  width: 90vw;
}

</style>