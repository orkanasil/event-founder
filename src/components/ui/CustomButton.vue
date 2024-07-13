<template>
  <button
    :type="type"
    :class="{
      icon: variant === 'icon',
      detail: variant === 'detail',
    }"
    class="flex items-center justify-center"
  >
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: "button",
  },
  variant: {
    type: String,
    default: "icon",
    validator(value) {
      return ["icon", "detail"].includes(value);
    },
  },
});
</script>

<style scoped>
.detail {
  background-color: rgb(235, 229, 148);
  display: flex;
  padding: 8px 16px;
  gap: 10px;
  border-radius: 8px;
}

.icon {
  cursor: pointer;
  
}
</style>
