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
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">daisyUI</a>
      <label for="drawer" class="lg:hidden">Open drawer</label>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li><a>Link</a></li>
        <li>
          <details>
            <summary>Parent</summary>
            <ul class="rounded-t-none bg-base-100 p-2">
              <li><a>Link 1</a></li>
              <li><a>Link 2</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </div>
</template>
