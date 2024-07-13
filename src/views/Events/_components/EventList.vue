<template>
  <div>
    <ListItem
      v-for="(event, index) in events"
      :key="index"
      :event="event"
      :format-date="formatDate"
    />
  </div>
</template>

<script setup>
import ListItem from "./ListItem.vue";
import { useEventStore } from "@/stores/events";
import { computed } from "vue";

const eventStore = useEventStore();
const events = computed(() => eventStore.getEvents);

const formatDate = () => {
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };
  return new Date().toLocaleDateString("tr-TR", options);
};
</script>
