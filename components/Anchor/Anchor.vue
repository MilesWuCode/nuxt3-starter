<script setup lang="ts">
const props = defineProps({
  id: { type: String, required: true },
})

// kebabCase
const id = props.id
  .trim()
  .replace(/([a-z])([A-Z])/g, '$1-$2')
  .replace(/[\s_]+/g, '-')
  .toLowerCase()
</script>

<template>
  <a :id="id" class="block scroll-mt-[68px] text-3xl" :href="`#${id}`">
    <slot />
  </a>
</template>
