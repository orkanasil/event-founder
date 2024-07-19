<template>
  <div
    class="text-m mt-4 flex items-center gap-10 rounded-2xl bg-sky-50 px-20 py-8"
  >
    <Obutton
      @click="$emit('addFav', event)"
      variant="icon"
      class="cursor-pointer hover:scale-110 hover:text-red-500"
      ><i class="fa-sharp fa-regular fa-heart fa-lg"></i>
    </Obutton>
    <p class="w-72 font-semibold">{{ event.name }}</p>
    <div class="ml-auto flex gap-3">
      <p><i class="fa-sharp fa-regular fa-calendar"></i></p>
      <p>{{ formatDate(event.dates.start.localDate) }}</p>
    </div>
    <div class="pl-6">
      <OButton variant="detail" @click="toggleModal"
        ><i class="fa-sharp fa-solid fa-magnifying-glass"></i>
        Detail Page
      </OButton>
    </div>
    <div v-if="isShowModal">
      <EventModal
        :event="event"
        :format-date="formatDate"
        :closeModal="closeModal"
        :latitude="latitude"
        :longitude="longitude"
      />
    </div>
  </div>
</template>

<script setup>
import EventModal from "@/views/Events/_components/EventModal.vue";
import { defineProps, ref, computed, defineEmits } from "vue";
import { useRouter } from "vue-router";

defineEmits(["addFav"]);

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

const isShowModal = ref(false);

const latitude = computed(() =>
  Number(props.event._embedded.venues[0].location.latitude),
);
const longitude = computed(() =>
  Number(props.event._embedded.venues[0].location.longitude),
);

const toggleModal = () => {
  isShowModal.value = !isShowModal.value;
};

const closeModal = () => {
  isShowModal.value = false;
  router.push({
    name: "all-events",
  });
};
</script>
