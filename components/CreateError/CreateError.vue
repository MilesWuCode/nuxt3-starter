<script setup lang="ts">
const onClick = () => {
  throw Error('has error...')
}
</script>

<template>
  <button @click="onClick">Create Error</button>
</template>
