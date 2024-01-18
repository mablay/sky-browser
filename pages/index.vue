<template>
  <div class="page">
    <div class="container">
      <h1>Sky Browser</h1>
      <div class="row">
        <div class="col">
          <nuxt-link to="ktx">
            <div class="card">Images</div>
          </nuxt-link>
        </div>
        <div class="col">
          <nuxt-link to="mesh">
            <div class="card">Meshes</div>
          </nuxt-link>
        </div>
      </div>
      <div class="about">
        <pre>
Status: Most meshes and textures can be displayed

Credits to:
* TGC for their wonderful work
* Lukas & Chara for RE insights
* longbyte1 for the mesh decode script
* DancingTwix, Alturus, LivingMaize
  for infos in Discord and Forums
* Gred Zaal & Jarod Guest from polyhaven.com
  for their 3D sky background image

Relevant JS libraries:
* three
* lz4js
* @zip.js/zip.js
* vue3
* nuxt3

texgenpack has been compiled to WASM, so
your browser can load ETC2 KTX files.
        </pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.page {
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: rgb(64,138,180);
  background: linear-gradient(180deg, rgba(64,138,180,1) 0%, rgba(23,52,66,1) 100%);
}

.container {
  max-width: 800px;
  align-self: center;
}

h1::first-letter {
  font-size: 1.4em;
}
h1 {
  /* font-family: 'Brush Script MT', cursive; */
  margin-top: 0;
  font-size: 3.5em;
}

.row {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
}
.col {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}

.card {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  margin: 8px;
  min-height: 60px;
  min-width: 60px;
  background-color: #DDD4;
  border-radius: 8px;
  color: white;
}
.card:hover {
  background-color: #DDD6;
}

a {
  text-decoration: none;
}

.about {
  padding-top: 30px;
  text-align: left;
}
</style>