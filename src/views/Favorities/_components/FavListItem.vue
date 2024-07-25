<template>
  <div
    class="text-m my-2 flex flex-col items-center gap-10 rounded-2xl bg-sky-50 px-20 py-6 md:flex md:flex-row md:items-center"
  >
    <Obutton
      @click="$emit('removeItem', event)"
      variant="icon"
      class="cursor-pointer hover:scale-110 hover:text-red-500"
      ><i class="fa-sharp fa-solid fa-trash-can fa-lg"></i>
    </Obutton>
    <p class="max-w-72 font-semibold">{{ event.name }}</p>
    <div class="flex gap-3 md:ml-auto">
      <p><i class="fa-sharp fa-regular fa-calendar"></i></p>
      <p>{{ formatDate(event.dates.start.localDate) }}</p>
    </div>
    <div class="md:pl-6">
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
import { ref, computed, defineProps, defineEmits } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

defineEmits(["removeItem"]);

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
