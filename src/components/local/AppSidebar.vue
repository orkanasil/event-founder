<template>
  <div class="flex flex-col items-center gap-6 py-12 text-xl font-light">
    <img src="@/assets/logo.svg" alt="Logo" class="h-48" />
    <div class="flex flex-col items-center gap-6 pt-8">
      <Obutton
        class="cursor-pointer xl:hidden"
        variant="icon"
        @click="showMenu"
      >
        <i class="fa-sharp fa-solid fa-bars"></i>
      </Obutton>
      <div
        :class="{
          'flex flex-col items-center gap-6': isShowMenu,
          'hidden flex-col gap-6 xl:flex': !isShowMenu,
        }"
      >
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
          Favorites
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
  </div>
</template>

<script setup>
import { ref } from "vue";

const isShowMenu = ref(false);

const showMenu = () => {
  isShowMenu.value = !isShowMenu.value;
};
</script>
