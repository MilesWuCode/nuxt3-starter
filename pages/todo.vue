<script setup lang="ts">
import { useTodos } from '~/composables/useTodos'

useSeoMeta({
  title: 'Todo',
})

const { todos, addTodo } = useTodos()
</script>

<template>
  <div>
    <Anchor id="Todo">Todo</Anchor>

    <div v-for="todo in todos" :key="todo.id">
      {{ todo.title }}
    </div>
  </div>
</template>
