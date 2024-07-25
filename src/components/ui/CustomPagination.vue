<template>
  <div class="grid grid-cols-3 items-center gap-4">
    <OButton
      variant="detail"
      @click="previousPage"
      :disabled="currentPage === 1"
      >Previous</OButton
    >
    <div class="flex w-full cursor-pointer items-center justify-evenly">
      <span
        @click="goToPage(number)"
        v-for="number in totalPages"
        :key="number"
        class="rounded-lg p-2 hover:bg-sky-50"
        :class="{
          'rounded-lg bg-sky-100 p-2 font-bold text-slate-600':
            currentPage === number,
          'text-black': currentPage !== number,
        }"
        >{{ number }}</span
      >
    </div>
    <OButton
      variant="detail"
      @click="nextPage"
      :disabled="currentPage === totalPages"
      >Next</OButton
    >
  </div>
</template>

<script setup>
const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["update:currentPage"]);

const goToPage = (pageNumber) => {
  emit("update:currentPage", pageNumber);
};
const nextPage = () => {
  if (props.currentPage < props.totalPages) {
    emit("update:currentPage", props.currentPage + 1);
  }
};

const previousPage = () => {
  if (props.currentPage > 1) {
    emit("update:currentPage", props.currentPage - 1);
  }
};
</script>
