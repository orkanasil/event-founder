<template>
  <div>
    <div v-for="item in listGallery" :key="item" v-text="item" />
  </div>
  <PaginationBar
    class="h-8"
    :first="false"
    :last="false"
    :total-row="30"
    :language="lang"
    :page-size-options="false"
    :info="false"
    :disabled="false"
    align="left"
    @change="changeGallery"
  />
</template>
<script setup>
import { ref } from "vue";
import { PaginationBar } from "v-page";

const srcList = Array(88)
  .fill(0)
  .map((val, index) => index + 1);
const listGallery = ref([]);

function changeGallery({ pageNumber, pageSize }) {
  const start = pageSize * (pageNumber - 1);
  const end =
    start + pageSize > srcList.length ? srcList.length : start + pageSize;

  listGallery.value = srcList.filter((val, index) => {
    return index >= start && index < end;
  });
}
</script>
