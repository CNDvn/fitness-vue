<script setup lang="ts">
import IconCalendar from './icons/IconCalendar.vue'

defineProps<{
  title: string
}>()
</script>

<template>
  <div style="color: aliceblue; padding: 10px">
    <div style="display: flex; height: 20px; justify-content: space-between">
      <div>Tuần 9</div>
      <div style="display: flex">
        <div style="display: flex; margin-right: 20px">
          <img src="/images/fire.png" alt="fire" style="height: 100%" />
          <p class="font-bold text-red-700 mx-2">26</p>
        </div>
        <div style="color: #56dffd">
          <IconCalendar class="icon" />
        </div>
      </div>
    </div>
    <div style="margin-top: 1rem">
      <h2 class="font-bold text-lg">{{ title }}</h2>
    </div>
  </div>
</template>
