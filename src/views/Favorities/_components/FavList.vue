<template>
  <div class="mb-4 flex w-full flex-col rounded-xl px-6">
    <template v-if="favEvents.length === 0">
      <div
        class="my-auto flex h-full w-full items-center justify-center rounded-xl bg-sky-50"
      >
        <p class="text-xl text-gray-500">There are no favorite events yet.</p>
      </div>
    </template>
    <template v-else>
      <div class="flex h-full flex-col justify-between">
        <FavListItem
          v-for="(event, index) in paginatedItems"
          :key="index"
          :event="event"
          :format-date="formatDate"
          @remove-item="removeItem"
          :index="index"
        />
        <OPagination
          class="py-4"
          :currentPage="currentPage"
          :totalPages="totalPages"
          @update:currentPage="updatePage"
        />
      </div>
    </template>
  </div>
</template>

<script setup>
import FavListItem from "./FavListItem.vue";
import { ref, computed } from "vue";
import { useEventStore } from "@/stores/events";

const eventStore = useEventStore();

const favEvents = computed(() => eventStore.favEvents);

const currentPage = ref(1);
const itemsPerPage = ref(4);

const totalPages = computed(() => {
  return Math.ceil(favEvents.value.length / itemsPerPage.value);
});

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return favEvents.value.slice(start, end);
});

const updatePage = (page) => {
  currentPage.value = page;
};

const removeItem = (payload) => {
  eventStore.removeFavEvents(payload);
};

const formatDate = (id) => {
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };
  return new Date(id).toLocaleDateString("tr-TR", options);
};
</script>
