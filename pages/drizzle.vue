<script setup lang="ts">
import { type Post } from '~/database/drizzle/schema'

interface Data {
  data: Post[]
}
const { data: posts } = await useFetch<Data>('/api/drizzle/posts')

useSeoMeta({
  title: posts.value?.data?.at(0)?.name ?? 'Drizzle',
})
</script>

<template>
  <div>
    <Anchor id="Drizzle">Drizzle</Anchor>

    <p v-for="post in posts?.data" :key="post.id">
      {{ post.id + ' ' + post.name }}
    </p>
  </div>
</template>
