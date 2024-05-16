<script setup lang="ts">
useSeoMeta({
  title: 'Nuxt Error Boundary',
})
</script>

<template>
  <div>
    <Anchor id="Nuxt Error Boundary">Nuxt Error Boundary</Anchor>

    <ErrorBoundary>
      <CreateError />
    </ErrorBoundary>
  </div>
</template>
