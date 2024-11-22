<script setup lang="ts">
import { ref } from 'vue'

const containerCss = ref('container')
</script>
<template>
  <main :class="containerCss">workout</main>
</template>

<style scoped>
.container {
  height: 100vh;
  color: aliceblue;
  padding: 5px;
}
</style>
