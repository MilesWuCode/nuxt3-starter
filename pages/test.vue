<script setup lang="ts"></script>

<template>
  <div>
    <h1>Test</h1>
    <Increase />

    <FetchData :id="1123" />

    <!-- example -->
    <ErrorBoundary>
      <CreateError />
    </ErrorBoundary>
  </div>
</template>
