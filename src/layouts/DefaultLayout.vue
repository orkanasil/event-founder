<template>
  <div class="flex h-screen justify-center bg-sky-200">
    <div class="container mt-40 h-2/4 w-3/4 rounded-2xl bg-white">
      <div class="w-64 h-full bg-sky-50 rounded-l-2xl">
        <AppSidebar />
      </div>
      <div></div>
    </div>
  </div>
</template>

<script setup>
import AppSidebar from "@/components/local/AppSidebar.vue";
</script>

<style scoped></style>
