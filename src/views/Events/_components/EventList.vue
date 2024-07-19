<template>
  <div>
    <ListItem
      v-for="(event, index) in events"
      :key="index"
      :event="event"
      :format-date="formatDate"
      @add-fav="addFav($event)"
    />
  </div>
</template>

<script setup>
import ListItem from "./ListItem.vue";
import { useEventStore } from "@/stores/events";
import { computed } from "vue";

const eventStore = useEventStore();
const events = computed(() => eventStore.getEvents);

const addFav = (payload) => {
  console.log("here", payload);
  eventStore.findEventsById(payload);
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
