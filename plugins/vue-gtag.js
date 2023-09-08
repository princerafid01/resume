import VueGtag from 'vue-gtag'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    config: { id: process.env.NUXT_GTAG_ID },
  })
})
