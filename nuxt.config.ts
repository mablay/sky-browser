// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: ['/assets/style.css'],
  devtools: { enabled: false },
  app: {
    head: { title: 'Sky Browser' }
  },
  modules: ['@vueuse/nuxt']
})
