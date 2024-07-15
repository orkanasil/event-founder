<template>
  <OModal>
    <p>{{ event.name }}</p>
    <p>{{ formatDate(event.dates.start.localDate) }}</p>
    <P>{{ event.priceRanges[0].min }}$ - {{ event.priceRanges[0].max }}$</P>
    <img :src="event.images[0].url" alt="Event Image" />
    <p>{{ event._embedded.venues[0].location.latitude }}</p>
    <button @click="closeModal">X</button>
  </OModal>
</template>

<script setup>
defineProps({
  event: {
    type: Object,
    required: true,
  },
  formatDate: {
    type: Function,
    required: true,
  },
  closeModal: {
    type: Function,
    required: true,
  },
});
</script>
