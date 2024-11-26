<script setup lang="ts">
defineProps<{
  title?: string
  progress: string
}>()
</script>

<template>
  <div style="text-align: center">
    <p v-if="title" class="text-sm mb-1">{{ title }}</p>
    <div class="relative bg-gray-200 rounded-full h-2">
      <div class="absolute bg-cyan-400 h-2 rounded-full" :style="{ width: `${progress}%` }"></div>
    </div>
  </div>
</template>
