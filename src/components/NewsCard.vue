<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  title: string
  url: string
  content: string
}>()

// style
const itemCss = ref('item')
</script>

<template>
  <div :class="itemCss">
    <img
      :src="url"
      :alt="title"
      style="width: 100%; height: 70%; object-fit: fill; border-radius: 20px"
    />
    <div
      style="
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      "
    >
      <h2 class="font-bold text-sm">{{ title }}</h2>
    </div>
    <div
      style="
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      "
    >
      <p class="text-gray-600 text-sm">{{ content }}</p>
    </div>
  </div>
</template>

<style scoped>
.item {
  margin-top: 10px;
  margin-bottom: 10px;
  width: 40%;
  height: 200px;
  overflow: hidden;
}
</style>

<!-- display: -webkit-box; /* Flexbox layout */
-webkit-line-clamp: 1; /* Giới hạn 2 dòng */
-webkit-box-orient: vertical; /* Thiết lập hướng */
overflow: hidden; /* Ẩn phần text thừa */
text-overflow: ellipsis; /* Hiển thị dấu ba chấm */ -->
