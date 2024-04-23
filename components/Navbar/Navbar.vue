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
    label: 'Test',
    to: '/test',
  },
]
</script>

<template>
  <UBreadcrumb :links="links" :divider="null" :ui="{ ol: 'gap-x-3' }">
    <template #default="{ link, isActive, index }">
      <UBadge
        :color="isActive ? 'primary' : 'gray'"
        class="truncate rounded-full"
      >
        {{ index + 1 }}. {{ link.label }}.
      </UBadge>
    </template>
  </UBreadcrumb>
</template>
