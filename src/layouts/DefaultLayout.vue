<template>
  <div class="flex min-h-screen justify-center bg-sky-200">
    <div
      class="container flex min-h-full w-full flex-col rounded-2xl bg-white md:mt-20 md:h-3/4 lg:w-3/4 lg:flex-row xl:mt-40"
    >
      <div
        class="flex w-full justify-center bg-sky-100 lg:w-1/4 lg:rounded-l-2xl"
      >
        <AppSidebar />
      </div>
      <div class="flex flex-grow flex-col">
        <div class="mt-10 flex h-full px-4 md:px-16">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppSidebar from "@/components/local/AppSidebar.vue";
</script>
