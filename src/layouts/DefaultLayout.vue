<template>
  <div class="flex h-screen justify-center bg-sky-200">
    <div class="container mt-40 flex h-3/4 w-3/4 rounded-2xl bg-white">
      <div class="h-full w-64 rounded-l-2xl bg-sky-50">
        <AppSidebar />
      </div>
      <div class="flex flex-grow flex-col">
        <div class="flex px-16 pt-4">
          <AppHeader />
        </div>
        <div class="mt-10 flex h-full pl-16">
          <AllEvents />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppSidebar from "@/components/local/AppSidebar.vue";
import AppHeader from "@/components/local/AppHeader.vue";
import AllEvents from "@/views/Events/AllEvents.vue";
</script>

<style scoped></style>
