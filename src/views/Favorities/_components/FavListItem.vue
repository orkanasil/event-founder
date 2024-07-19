<template>
  <div
    class="text-m ml-6 mr-6 mt-4 flex items-center gap-10 rounded-2xl bg-white px-10 py-8"
  >
    <Obutton
      variant="icon"
      class="cursor-pointer hover:scale-110 hover:text-red-500"
      ><i class="fa-sharp fa-solid fa-trash-can fa-lg"></i>
    </Obutton>
    <p class="w-72 font-semibold">{{ event.name }}</p>
    <div class="ml-auto flex gap-3">
      <p><i class="fa-sharp fa-regular fa-calendar"></i></p>
      <p>{{ formatDate(event.dates.start.localDate) }}</p>
    </div>
    <div class="pl-6">
      <OButton variant="detail" @click="openModal"
        ><i class="fa-sharp fa-solid fa-magnifying-glass"></i>
        Detail Page
      </OButton>
    </div>
    <div v-if="isShowFavModal">
      <FavModal
        :formatDate="formatDate"
        :event="event"
        :closeModal="closeModal"
        :latitude="latitude"
        :longitude="longitude"
      />
    </div>
  </div>
</template>

<script setup>
import FavModal from "./FavModal.vue";
import { ref, computed, defineProps } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  event: {
    type: String,
    required: true,
  },
  formatDate: {
    type: Function,
    required: true,
  },
});

const isShowFavModal = ref(false);

const openModal = () => {
  isShowFavModal.value = !isShowFavModal.value;
};

const closeModal = () => {
  (isShowFavModal.value = false),
    router.push({
      name: "fav-events",
    });
};

const latitude = computed(() =>
  Number(props.event._embedded.venues[0].location.latitude),
);

const longitude = computed(() =>
  Number(props.event._embedded.venues[0].location.longitude),
);
</script>
