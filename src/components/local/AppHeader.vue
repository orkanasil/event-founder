<template>
  <div class="flex flex-col">
    <button
      class="rounded border-2 border-slate-500 px-14 py-2 hover:bg-sky-50"
      @click="showDropdown"
    >
      All events <i class="fa-sharp fa-solid fa-caret-down px-2"></i>
    </button>
    <div
      v-if="isShowDropdown"
      class="flex flex-col gap-2 rounded bg-sky-50 py-2 pl-14"
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
