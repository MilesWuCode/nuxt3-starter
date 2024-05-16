<script setup lang="ts">
const props = defineProps({
  id: { type: String, required: true },
})

const id = props.id.trim().replace(/\s+/g, '-').toLowerCase()
</script>

<template>
  <a :id="id" class="block scroll-mt-[68px] text-3xl" :href="`#${id}`">
    <slot />
  </a>
</template>
