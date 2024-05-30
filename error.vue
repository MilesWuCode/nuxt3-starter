<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: {
    type: Object as () => NuxtError,
    default: undefined,
  },
})
</script>

<template>
  <NuxtLayout name="default">
    <h1>Error</h1>
    <p>{{ error?.statusCode }}</p>
    <p>{{ error?.statusMessage }}</p>
  </NuxtLayout>
</template>
