// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: false,
  vite: {
    server: {
      fs: {
        allow: ['..']
      }
    }
  },
  // css: ['/assets/style.css'],
  // css: ['three-perspective/fullscreen.css'],
  devtools: { enabled: false },
  modules: [
    '@vueuse/nuxt',
  ],
})
