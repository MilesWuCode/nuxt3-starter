<template>
  <NuxtErrorBoundary>
    <slot />
    <template #error="{ error }">
      <button @click="error.value = null">Reload</button>
    </template>
  </NuxtErrorBoundary>
</template>
