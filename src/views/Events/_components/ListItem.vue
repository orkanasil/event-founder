<template>
  <div>
    <li>{{ event.name }}</li>
  </div>
</template>

<script setup>
defineProps({
  event: {
    type: String,
    required: true,
  },
});
</script>
