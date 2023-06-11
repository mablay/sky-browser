import { Perspective } from 'three-perspective'
import 'three-perspective/fullscreen.css'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('Perspective', Perspective)
})
