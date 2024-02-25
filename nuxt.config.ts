import wasm from 'vite-plugin-wasm'

const baseURL = process.env.NODE_ENV === 'production' ? '/sky-browser/' : '/'

// https://nuxt.com/docs/api/configuration/nuxt-config
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
  vite: {
    plugins: [wasm()],
  },
  modules: ['@vueuse/nuxt', '@pinia/nuxt']
})
