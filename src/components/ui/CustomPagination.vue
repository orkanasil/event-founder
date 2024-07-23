<template>
  <div class="grid grid-cols-3 items-center gap-4">
    <OButton
      variant="detail"
      @click="previousPage"
      :disabled="currentPage === 1"
      >Previous</OButton
    >
    <span class="flex justify-center"
      >Page {{ currentPage }} of {{ totalPages }}</span
    >
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
