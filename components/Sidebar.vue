<script setup>
let isOpen = ref(false)

function toggleMenu() {
  isOpen = !isOpen
}
</script>

<template>
  <aside class="sidebar" :class="{ active: isOpen }">
    <div class="sidebar-info">
      <figure class="avatar-box">
        <img src="/images/my-avatar.png" alt="Mahmud Rafid" width="80">
      </figure>

      <div class="info-content">
        <h1 class="name" title="Mahmud Rafid">
          Mahmud Rafid
        </h1>

        <p class="title text-center xl:block flex items-center justify-center gap-1">
          <span class="xl:after:content-[''] after:content-[',']">Full Stack Web Developer</span>
          <span>Laravel Artisan</span>
        </p>
      </div>

      <button class="info_more-btn" @click="isOpen = !isOpen">
        <span>Show Contacts</span>

        <ion-icon name="chevron-down" />
      </button>
    </div>

    <div class="sidebar-info_more">
      <div class="separator" />

      <ul class="contacts-list">
        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="mail-outline" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Email
            </p>

            <a href="mailto:mahmudrafid02@gmail.com" class="contact-link break-words whitespace-normal hidden lg:block"> <span class="xl:after:content-[''] after:content-[',']">mahmudrafid02</span>
              <span>@gmail.com</span></a>

            <a href="mailto:mahmudrafid02@gmail.com" class="contact-link break-words whitespace-normal  block lg:hidden">mahmudrafid02@gmail.com</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-github" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Github
            </p>

            <a href="https://github.com/princerafid01" class="contact-link" target="_blank">princerafid01</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-linkedin" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Linkedin
            </p>

            <a href="https://bd.linkedin.com/in/mahmud-rafid" class="contact-link" target="_blank">Mahmud Rafid</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="location-outline" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Location
            </p>

            <address>Dhaka, Bangladesh</address>
          </div>
        </li>
      </ul>

      <div class="separator" />

      <ul class="social-list">
        <li class="social-item">
          <NuxtLink to="https://twitter.com/MahmudRafid2" class="social-link" target="_blank">
            <ion-icon name="logo-twitter" />
          </NuxtLink>
        </li>

        <li class="social-item">
          <NuxtLink to="https://www.instagram.com/iamrafid1999" class="social-link" target="_blank">
            <ion-icon name="logo-instagram" />
          </NuxtLink>
        </li>
        <!-- <LangSwitcher2 /> -->
      </ul>
    </div>
  </aside>
</template>
