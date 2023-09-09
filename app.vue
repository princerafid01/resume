<script setup>
import { useI18n } from 'vue-i18n'
import { useLocaleStore } from './composables/locale'
const { locale } = useI18n({ useScope: 'global' })
const cookieLocale = useLocaleStore()

locale.value = cookieLocale.getLocale || 'en'

const loadingPage = ref()

onBeforeMount(() => {
  loadingPage.value = false
})

onMounted(() => {
  setTimeout(() => {
    loadingPage.value = true
  }, 1000)
})

useHead({
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'Mahmud Rafid - Backend Engineer - Resume and Portfolio' },
    { hid: 'og-type', property: 'og:type', content: 'website' },
    { hid: 'og-title', property: 'og:title', content: 'Mahmud Rafid - Backend Engineer - Resume and Portfolio' },
    { hid: 'og-desc', property: 'og:description', content: 'Welcome to Mahmud Rafid\'s resume and portfolio site. Explore my professional background as a Backend Engineer and discover my work and achievements in the field.' },
    {
      hid: 'og-image',
      property: 'og:image',
      content: 'https://pbs.twimg.com/profile_images/1694780129380380672/fGXGHRnK_400x400.jpg',
    },
    { hid: 'og-url', property: 'og:url', content: 'https://mahmud-rafid.vercel.app' },
    { hid: 't-type', name: 'twitter:card', content: 'Mahmud Rafid | Backend Engineer | Resume' },
  ],
  // ogTitle: 'Mahmud Rafid - Backend Engineer - Resume and Portfolio',
  // description: 'Welcome to Mahmud Rafid\'s resume and portfolio site. Explore my professional background as a Backend Engineer and discover my work and achievements in the field.',
  // ogDescription: 'Welcome to Mahmud Rafid\'s resume and portfolio site. Explore my professional background as a Backend Engineer and discover my work and achievements in the field.',
  // ogImage: 'https://pbs.twimg.com/profile_images/1694780129380380672/fGXGHRnK_400x400.jpg',
  // twitterCard: 'https://pbs.twimg.com/profile_images/1694780129380380672/fGXGHRnK_400x400.jpg',
})
</script>

<template>
  <LoadingPage v-show="!loadingPage" />

  <NuxtLayout>
    <NuxtPage transition />
  </NuxtLayout>
</template>

<style>
.v-enter-active, .v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
}
</style>
