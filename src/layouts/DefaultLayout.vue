<template>
  <div>
    <p class="bg-slate-300 py-4">orki</p>
    <div v-for="(event, index) in events" :key="index">
      <div>
        <li>{{ event.name }}</li>
        <img :src="event.images[4].url" alt="Event Image" />
        <p>{{ event.dates.start.localDate }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useEventStore } from "@/stores/events";
import { onMounted, computed } from "vue";

const eventStore = useEventStore();
const events = computed(() => eventStore.getEvents);

onMounted(() => {
  eventStore.fetchEvents();
});
</script>

<style scoped>
img {
  height: 100px;
  width: 200px;
}
</style>
