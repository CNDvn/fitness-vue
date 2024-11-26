<script setup lang="ts">
const props = defineProps<{
  progress: string
  width: string
  height: string
  text?: string
  img?: string
}>()
const classSvg = `${props.width} ${props.height}`
</script>

<template>
  <!-- Vòng cung và chỉ số trung tâm -->
  <div class="relative flex justify-center items-center mb-6">
    <svg viewBox="0 0 36 36" :class="classSvg">
      <!-- Vòng tròn nền -->
      <path
        class="text-gray-300"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <!-- Vòng tròn giá trị -->
      <path
        class="text-cyan-400"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        :stroke-dasharray="progress"
        d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
      />
    </svg>
    <!-- Giá trị trung tâm -->
    <div v-if="img" class="absolute text-center">
      <img :src="img" alt="image" style="height: 3.5rem; width: 3.5rem; border-radius: 50%" />
    </div>
    <div v-if="text" class="absolute text-center">
      <p class="text-2xl font-bold">{{ text }}</p>
      <p class="text-sm">Còn Lại</p>
    </div>
  </div>
</template>
