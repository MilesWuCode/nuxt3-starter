interface Todo {
  id: number
  title: string
  completed: boolean
}

export const useTodos = () => {
  const todos = ref<Todo[]>([])

  async function getTodos() {
    const { data } = await useFetch<Todo[]>('/api/todos')

    if (data.value) {
      todos.value = data.value
    }
  }

  async function addTodo(title: string) {
    if (title === '') return

    const { data } = await useFetch<Todo>('/api/todos', {
      method: 'POST',
      body: { title },
    })

    if (data.value) {
      todos.value.push(data.value)
    }
  }

  async function deleteTodo(todo: Todo) {
    await useFetch(`/api/todos/${todo.id}`, {
      method: 'DELETE',
    })

    todos.value = todos.value.filter((t) => t.id !== todo.id)
  }

  onMounted(() => {
    getTodos()
  })

  return {
    todos: computed(() => todos.value),
    addTodo,
    deleteTodo,
  }
}
