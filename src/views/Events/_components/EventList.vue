<template>
  <div class="flex grow flex-col justify-between">
    <div>
      <AppHeader @filter-event="onEventFilter" />
    </div>
    <ListItem
      v-for="(event, index) in paginatedItems"
      :key="index"
      :event="event"
      :format-date="formatDate"
      @add-fav="addFav($event)"
    />
    <OPagination
      class="py-4"
      :currentPage="currentPage"
      :totalPages="totalPages"
      @update:currentPage="updatePage"
    />
  </div>
</template>

<script setup>
import ListItem from "./ListItem.vue";
import AppHeader from "@/components/local/AppHeader.vue";
import { useEventStore } from "@/stores/events";
import { ref, computed } from "vue";

const eventStore = useEventStore();
const events = computed(() => eventStore.getEvents);

const currentPage = ref(1);
const itemsPerPage = ref(3);

const totalPages = computed(() => {
  return Math.ceil(events.value.length / itemsPerPage.value);
});

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return events.value.slice(start, end);
});

const onEventFilter = () => {
  currentPage.value = 1;
};
const updatePage = (page) => {
  currentPage.value = page;
};

const addFav = async (payload) => {
  await eventStore.setFavEvent(payload);
  // await eventStore.fetchEvents();
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
