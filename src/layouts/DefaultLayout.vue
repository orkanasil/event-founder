<template>
  <div class="flex h-screen justify-center bg-sky-200">
    <div
      class="container mt-40 flex h-3/4 w-3/4 flex-col rounded-2xl bg-white md:flex xl:flex-row"
    >
      <div
        class="flex w-full justify-center rounded-2xl bg-sky-100 xl:h-full xl:w-1/4 xl:rounded-l-2xl"
      >
        <AppSidebar />
      </div>
      <div class="flex flex-grow flex-col">
        <div class="mt-10 flex h-full overflow-y-scroll pl-16">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppSidebar from "@/components/local/AppSidebar.vue";
</script>
