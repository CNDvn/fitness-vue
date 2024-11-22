<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  title: string
  url: string
}>()

// style
const itemCss = ref('item')
</script>

<template>
  <img :src="url" :class="itemCss" :alt="title" />
</template>

<style scoped>
.item {
  margin-top: 10px;
  margin-bottom: 10px;
  width: 40%;
  height: 200px;
  border: 1px solid;
  border-radius: 20px;
  background-color: aqua;
}
</style>
