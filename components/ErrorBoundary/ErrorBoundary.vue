<template>
  <NuxtErrorBoundary>
    <slot />
    <template #error="{ error }">
      <p>{{ error }}</p>
      <button @click="error.value = null">Reload</button>
    </template>
  </NuxtErrorBoundary>
</template>
