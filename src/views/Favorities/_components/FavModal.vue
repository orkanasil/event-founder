<template>
  <OModal>
    <OButton class="self-end" variant="icon" @click="closeModal"
      ><i class="fa-sharp fa-solid fa-xmark"></i
    ></OButton>
    <div class="flex flex-col rounded-lg bg-white p-6 lg:flex-row">
      <div class="flex flex-col gap-4 border-r-2 pr-6 lg:w-1/2">
        <img
          class="mb-4 rounded-lg"
          :src="event.images[5].url"
          alt="Event Image"
        />
        <p class="text-xl font-bold text-gray-900">{{ event.name }}</p>
        <p class="text-lg text-gray-700">
          <span class="font-semibold">Date: </span>
          {{ formatDate(event.dates.start.localDate) }}
        </p>
        <p class="text-lg text-gray-900">
          <span class="font-semibold">Price Range: </span>
          {{ event.priceRanges[0].min }}$ - {{ event.priceRanges[0].max }}$
        </p>
      </div>
      <div class="flex flex-col items-center pl-4 lg:w-1/2">
        <GoogleMap
          api-key="AIzaSyDVtBWbOu_LOrPI_QmZY1y3ShCIQu-FOrc"
          :center="center"
          :zoom="12"
          class="mt-4 h-full w-full rounded-lg lg:ml-4 lg:mt-0"
        >
          <Marker :options="{ position: center }" />
        </GoogleMap>
      </div>
    </div>
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
