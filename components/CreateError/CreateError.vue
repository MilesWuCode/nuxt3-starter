<script setup lang="ts">
const onClick = () => {
  throw Error
}
</script>

<template>
  <button @click="onClick">Create Error</button>
</template>
