<template>
  <client-only>
    <div class="container">
      <h2>Work in progress...</h2>
      <div>
        At the moment KTX textures have to be offline
        batch processed. Once in-browser conversion
        is available, You can explore textures here.
      </div>
      <div class="pt-2">
        <nuxt-link to="/">back</nuxt-link>
      </div>
    </div>
    <!-- <KtxViewer /> -->
  </client-only>
</template>

<script setup lang="ts">
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
</style>