<template>
  <div class="flex flex-col gap-6 pl-16 pt-12 text-xl font-light">
    <h1 class="text-3xl font-bold">BRAND</h1>
    <div class="flex flex-col gap-6 pt-8">
      <router-link to="/">
        <i
          class="fa-sharp fa-solid fa-house fa-sm pr-2"
          style="color: #929db0"
        ></i>
        Home
      </router-link>
      <router-link to="/favEvents">
        <i
          class="fa-sharp fa-solid fa-heart fa-sm pr-2"
          style="color: #929db0"
        ></i>
        Favorities
      </router-link>
      <router-link to="/aboutEvents">
        <i
          class="fa-sharp fa-solid fa-circle-info fa-sm pr-2"
          style="color: #929db0"
        ></i>
        About
      </router-link>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
