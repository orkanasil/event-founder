<template>
  <OModal>
    <p>{{ event.name }}</p>
    <p>{{ formatDate(event.dates.start.localDate) }}</p>
    <P>{{ event.priceRanges[0].min }}$ - {{ event.priceRanges[0].max }}$</P>
    <img :src="event.images[0].url" alt="Event Image" />
    <button @click="closeModal">X</button>
    <GoogleMap
      api-key="AIzaSyDVtBWbOu_LOrPI_QmZY1y3ShCIQu-FOrc"
      :center="center"
      :zoom="12"
      style="width: 100%; height: 200px"
    >
      <Marker :options="{ position: center }" />
    </GoogleMap>
  </OModal>
</template>

<script setup>
import { GoogleMap, Marker } from "vue3-google-map";
const props = defineProps({
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
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
});
const center = { lat: props.latitude, lng: props.longitude };
</script>
