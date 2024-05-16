<script setup lang="ts">
const links = [
  {
    label: 'Index',
    to: '/',
  },
  {
    label: 'Login',
    to: '/login',
  },
  {
    label: 'Drizzle',
    to: '/drizzle',
  },
  {
    label: 'SVG Sprite',
    to: '/svg-sprite',
  },
  {
    label: 'Nuxt Error Boundary',
    to: '/nuxt-error-boundary',
  },
  {
    label: 'Test',
    to: '/test',
  },
]
</script>

<template>
  <ul class="menu p-4">
    <li v-for="(link, i) in links" :key="i">
      <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
    </li>
  </ul>
</template>
