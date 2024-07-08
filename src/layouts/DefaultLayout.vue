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
import { ref, onMounted } from "vue";
const events = ref(null);
fetch(
  "https://app.ticketmaster.com/discovery/v2/events?apikey=gN74Pt2ffefTpa8JGmepbOcixbOQ40OG&locale=*&page=3",
)
  .then((response) => response.json())
  .then((data) => {
    events.value = data._embedded.events;
  });

onMounted(() => {
  console.log("Mounted çalişti");
  console.log(events);
});
</script>

<style scoped>
img {
  height: 100px;
  width: 200px;
}
</style>
