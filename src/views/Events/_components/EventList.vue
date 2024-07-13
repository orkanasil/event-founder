<template>
  <div>
    <ListItem v-for="(event, index) in events" :key="index" :event="event" />
  </div>
</template>

<script setup>
import ListItem from "./ListItem.vue";
import { useEventStore } from "@/stores/events";
import { computed } from "vue";

const eventStore = useEventStore();
const events = computed(() => eventStore.getEvents);
</script>

<style lang="scss" scoped></style>
