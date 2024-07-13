<template>
  <div
    class="text-m mt-4 flex items-center gap-10 rounded-2xl bg-sky-50 px-20 py-8"
  >
    <Obutton
      variant="icon"
      class="cursor-pointer hover:scale-110 hover:text-red-500"
      ><i class="fa-sharp fa-regular fa-heart fa-lg"></i>
    </Obutton>
    <p class="font-semibold">{{ event.name }}</p>
    <div class="ml-auto flex gap-3">
      <p><i class="fa-sharp fa-regular fa-calendar"></i></p>
      <p>{{ formatDate(event.dates.start.localDate) }}</p>
    </div>
    <div class="pl-8">
      <OButton variant="detail"
        ><i class="fa-sharp fa-solid fa-magnifying-glass"></i>
        Detail Page
      </OButton>
    </div>
  </div>
</template>

<script setup>
defineProps({
  event: {
    type: String,
    required: true,
  },
  formatDate: {
    type: Function,
    required: true,
  },
});
</script>
