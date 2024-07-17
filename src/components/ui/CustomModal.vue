<template>
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50"
  >
    <div class="relative w-3/4 max-w-4xl rounded-lg bg-white p-6 shadow-2xl">
      <div class="flex flex-col items-center">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
