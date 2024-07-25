<template>
  <div class="relative flex flex-col">
    <button
      class="rounded border-2 border-slate-500 px-14 py-2 hover:bg-sky-50"
      @click="showDropdown"
    >
      All events <i class="fa-sharp fa-solid fa-caret-down px-2"></i>
    </button>
    <div
      v-if="isShowDropdown"
      class="absolute top-11 z-10 flex flex-col gap-2 w-full items-center rounded border-2 bg-white py-2 shadow-lg lg:px-10"
    >
      <a @click="filterEvent('all')" href="#">
        All
        <i class="fa-sharp fa-solid fa-earth-americas px-2"></i>
      </a>
      <a @click="filterEvent('music')" href="#"
        >Music Shows <i class="fa-sharp fa-solid fa-guitar px-2"></i
      ></a>
      <a @click="filterEvent('sports')" href="#"
        >Sports <i class="fa-sharp fa-solid fa-football px-2"></i
      ></a>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useEventStore } from "@/stores/events";
const isShowDropdown = ref(false);

const eventStore = useEventStore();
const emit = defineEmits(["filterEvent"]);

const filterEvent = (payload) => {
  eventStore.filterEvents(payload);
  emit("filterEvent");
};

const showDropdown = () => {
  isShowDropdown.value = !isShowDropdown.value;
};
</script>

<style scoped></style>
