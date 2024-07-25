<template>
  <div class="mb-4 flex w-full flex-col rounded-xl bg-sky-50 px-6">
    <template v-if="favEvents.length === 0">
      <div class="my-auto flex w-full justify-center">
        <p class="text-xl text-gray-500">There are no favorite events yet.</p>
      </div>
    </template>
    <template v-else>
      <div>
        <FavListItem
          v-for="(event, index) in favEvents"
          :key="index"
          :event="event"
          :format-date="formatDate"
          @remove-item="removeItem"
          :index="index"
        />
      </div>
    </template>
  </div>
</template>

<script setup>
import FavListItem from "./FavListItem.vue";
import { computed } from "vue";
import { useEventStore } from "@/stores/events";

const eventStore = useEventStore();

const favEvents = computed(() => eventStore.favEvents);

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
