// https://nuxt.com/docs/api/configuration/nuxt-config
const baseURL = process.env.NODE_ENV === 'production' ? '/sky-browser/' : '/'
export default defineNuxtConfig({
  ssr: false,
  css: ['/assets/style.css'],
  devtools: { enabled: false },
  runtimeConfig: { baseURL },
  app: {
    baseURL,
    buildAssetsDir: '/nuxt/',
    head: {
      title: 'Sky Browser',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/sky-browser/favicon.ico' }]
    }
  },
  modules: ['@vueuse/nuxt']
})
