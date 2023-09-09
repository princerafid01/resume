import VueGtag from 'vue-gtag'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    config: { id: import.meta.env.NUXT_GTAG_ID },
  })
})
