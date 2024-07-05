<script setup lang="ts">
import NuxtIcon from '~/assets/svg/nuxt.svg'
import nuxtIconUrl from '~/assets/svg/nuxt.svg?url'
import nuxtIconRaw from '~/assets/svg/nuxt.svg?raw'
import NuxtSvgWithoutOptimizer from '~/assets/svg/nuxt.svg?skipsvgo'

useSeoMeta({
  title: 'SVG',
})
</script>

<template>
  <div>
    <Anchor id="SVG">SVG</Anchor>
    Component:
    <NuxtIcon class="h-12 w-12" />
    Url:
    <img :src="nuxtIconUrl" class="h-12 w-12" />
    Row:
    <div class="h-12 w-12" v-html="nuxtIconRaw"></div>
    Component Without Svgo:
    <NuxtSvgWithoutOptimizer class="h-12 w-12" />
  </div>
</template>
