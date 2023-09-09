<script setup>
import { useI18n } from 'vue-i18n'

useHead({
})

onMounted(() => {
  useLocaleStore()
})

const { locale } = useI18n({ useScope: 'global' })

/* Testimonials */
const { data: testimonials } = await useFetch('/api/testimonials')

const testimonialItem = ref({})
const activeModal = ref(false)
const activeOverlay = ref(false)

function showTestimonial(id) {
  testimonialItem.value = testimonials.value.find(item => item.id === id)
  activeModal.value = true
  activeOverlay.value = true
}

function closeTestimonaial() {
  testimonialItem.value = {}
  activeModal.value = false
  activeOverlay.value = false
}
/* Testimonials */

/* Services */
const { data: services } = await useFetch('/api/services')
</script>

<template>
  <article class="about active" data-page="about">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.about') }}
      </h2>
    </header>

    <section class="about-text text-white">
      <p class="text-md">
        I am a Full Stack Software Engineer specializing in building exceptional, high-quality websites and applications for web. Currently working at <a href="https://www.ivivelabs.com" class="inline-block vegas-gold" target="_blank">Ivivelabs</a>  as a Software Developer where I contributes to the Survey Maker SaaS applications by making Components with React, Laravel, Zustand etc.
      </p>

      <p class="text-md">
        I write code for humans and provide solutions to businesses. I am a passoniate developer with broad cross-domain expertise: <span class="contents vegas-gold font-bold">API Development, Web, DevOps, Automation </span>. I enjoy working with passionate people in a team to build products and solutions that help a large number of people.
      </p>
    </section>

    <!-- Stacks -->
    <section class="service">
      <h3 class="h3 service-title">
        Tech stacks I have experience with
      </h3>
      <div class="about-text max-w-none text-justify text-sm md:text-lg xl:col-span-2">
        <h4 id="languages" class="font-bold">
          <a href="#languages" aria-hidden="true" tabindex="-1" class="css-1tzfalu"><span class="icon icon-link" /></a>Languages:
        </h4>
        <p>PHP, Javascript</p>
        <h4 id="frameworks" class="font-bold">
          <a href="#frameworks" aria-hidden="true" tabindex="-1" class="css-1tzfalu"><span class="icon icon-link" /></a>Frameworks:
        </h4>
        <p>Laravel, Nuxtjs, Vue, React, jQuery, Wordpress, Tailwind</p>
        <h4 id="tools" class="font-bold">
          <a href="#tools" aria-hidden="true" tabindex="-1" class="css-1tzfalu"><span class="icon icon-link" /></a>Tools
        </h4>
        <p>MySQL, Redis, Zustand, Jest, Solr, Pinia(Vuex), Puppeteer</p>
        <h4 id="server-related" class="font-bold">
          <a href="#server-related" aria-hidden="true" tabindex="-1" class="css-1tzfalu"><span class="icon icon-link" /></a>Server related
        </h4>
        <p>Docker, CI/CD, Github Actions</p>
      </div>
    </section>

    <!-- What I am doing -->
    <section class="service">
      <h3 class="h3 service-title">
        What I am Currently doing?
      </h3>

      <ul class="text-white ml-2 leading-8 text-md">
        <li class="block text-md">
          - Building Api with Laravel
        </li>
        <li class="block text-md">
          - Consuming Api with React
        </li>
        <li class="block text-md">
          - Playing with Vue 3
        </li>
        <li class="block text-md">
          - Exploring Shopify app developemnt
        </li>
      </ul>
    </section>

    <!-- service -->

    <section class="service">
      <h3 class="h3 service-title">
        Tools
      </h3>

      <!-- <ul class="service-list"> -->
      <div class="container mx-auto grid grid-cols-6 md:grid-cols-12">
        <ServiceItem v-for="service in services" :key="service.id" :service="service" />
      </div>
      <!-- </ul> -->
    </section>

    <!-- testimonials -->

    <section class="testimonials">
      <h3 class="h3 testimonials-title">
        Testimonials
      </h3>

      <ul class="testimonials-list has-scrollbar">
        <li v-for="testimonial in testimonials" :key="testimonial.id" class="testimonials-item" @click="showTestimonial(testimonial.id)">
          <div class="content-card">
            <figure class="testimonials-avatar-box">
              <img :src="testimonial.image" alt="Daniel lewis" width="60">
            </figure>

            <h4 class="h4 testimonials-item-title">
              {{ testimonial.title }}
            </h4>

            <div class="testimonials-text">
              <p>{{ locale === 'en' ? testimonial.content?.en : testimonial.content?.tr }}</p>
            </div>
          </div>
        </li>
      </ul>
    </section>

    <!-- testimonials modal -->

    <div class="modal-container" :class="{ active: activeModal }">
      <div v-show="activeModal" class="overlay" :class="{ active: activeOverlay }" />

      <section class="testimonials-modal">
        <button class="modal-close-btn" @click="closeTestimonaial">
          <ion-icon name="close-outline" />
        </button>

        <div class="flex gap-5 mb-5 justify-start items-center">
          <div class="modal-avatar-box">
            <img :src="testimonialItem.image" alt="Daniel lewis" width="80">
          </div>

          <div class="modal-content">
            <h4 class="h3 modal-title">
              {{ testimonialItem.title }}
            </h4>
            <time datetime="2022-06-28">28 June, 2022</time>
          </div>
        </div>

        <div class="flex gap-5 items-start">
          <img class="my-auto hidden md:block" src="/images/icon-quote.svg" alt="quote icon">
          <p class="text-justify text-gray-400 text-sm md:text-md" v-html="locale === 'en' ? testimonialItem.content?.en : testimonialItem.content?.tr" />
        </div>
        <div class="mt-2 flex justify-end text-sm text-gray-600 italic">
          Company Co.
        </div>
      </section>
    </div>

    <!-- clients -->

    <!-- <section class="clients">
      <h3 class="h3 clients-title">
        Clients
      </h3>

      <ul class="clients-list has-scrollbar">
        <li class="clients-item">
          <a href="#">
            <img src="images/logo-1-color.png" alt="client logo">
          </a>
        </li>

        <li class="clients-item">
          <a href="#">
            <img src="images/logo-2-color.png" alt="client logo">
          </a>
        </li>

        <li class="clients-item">
          <a href="#">
            <img src="images/logo-3-color.png" alt="client logo">
          </a>
        </li>

        <li class="clients-item">
          <a href="#">
            <img src="images/logo-4-color.png" alt="client logo">
          </a>
        </li>

        <li class="clients-item">
          <a href="#">
            <img src="images/logo-5-color.png" alt="client logo">
          </a>
        </li>

        <li class="clients-item">
          <a href="#">
            <img src="images/logo-6-color.png" alt="client logo">
          </a>
        </li>
      </ul>
    </section> -->
  </article>
</template>
