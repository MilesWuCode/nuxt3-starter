<script setup lang="ts">
const error = useError()
</script>

<template>
  <NuxtLayout>
    <h1>Error</h1>
    <p>{{ error?.statusCode }}</p>
    <p>{{ error?.statusMessage }}</p>
  </NuxtLayout>
</template>
