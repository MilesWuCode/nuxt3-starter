<template>
  <div class="drawer">
    <input id="drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <slot />
    </div>
    <div class="drawer-side z-20">
      <label for="drawer" aria-label="close sidebar" class="drawer-overlay" />
      <ul class="menu min-h-full w-80 bg-base-200 p-4 text-base-content">
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
      </ul>
    </div>
  </div>
</template>
