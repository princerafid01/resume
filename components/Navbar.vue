<script setup>

</script>

<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <li class="navbar-item">
        <NuxtLink to="/" class="navbar-link">
          {{ $t('pageTitles.about') }}
        </NuxtLink>
      </li>

      <li class="navbar-item">
        <NuxtLink to="/resume" class="navbar-link">
          {{ $t('pageTitles.resume') }}
        </NuxtLink>
      </li>

      <li class="navbar-item">
        <NuxtLink to="/portfolio" class="navbar-link">
          {{ $t('pageTitles.portfolio') }}
        </NuxtLink>
      </li>

      <li class="navbar-item">
        <NuxtLink to="https://mahmudrafid.hashnode.dev" class="navbar-link" target="_blank">
          {{ $t('pageTitles.blog') }}
        </NuxtLink>
      </li>

      <li class="navbar-item">
        <NuxtLink to="https://bd.linkedin.com/in/mahmud-rafid" class="navbar-link" target="_blank">
          {{ $t('pageTitles.contact') }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
a.router-link-active {
  font-weight: bold;
}
a.router-link-exact-active {
  color: var(--vegas-gold);
}
</style>
