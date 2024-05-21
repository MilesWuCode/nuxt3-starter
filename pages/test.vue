<script setup lang="ts">
useSeoMeta({
  title: 'Test',
})
</script>

<template>
  <div>
    <Anchor id="Test">Test</Anchor>

    <Increase />

    <FetchData :id="123" />

    <Menu />
    <Menu />
    <Menu />
    <Menu />
    <Anchor id="Test2">Test2</Anchor>
    <Menu />
    <Menu />
    <Menu />
    <Menu />
    <Menu />
    <Menu />
  </div>
</template>
