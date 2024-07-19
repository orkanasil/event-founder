<template>
    <EventList />
</template>

<script setup>
import EventList from "./_components/EventList.vue";
import { useEventStore } from "@/stores/events";
import { onMounted } from "vue";

const eventStore = useEventStore();

onMounted(() => {
  eventStore.fetchEvents();
});
</script>

<style scoped></style>
