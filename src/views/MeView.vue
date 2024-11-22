<script setup lang="ts">
import { i18n } from '@/i18n'
import { ref } from 'vue'

const info = { name: 'Ly Swng', age: 20, goal: 'tăng kg' }

//style
const containerCss = ref('container')
const avatarCss = ref('avatar')
const infoContainerCss = ref('info_container')
const infoCss = ref('info')
</script>

<template>
  <main :class="containerCss">
    <h1 style="font-size: 20px">{{ i18n().profile }}</h1>
    <div :class="infoContainerCss">
      <img src="../../public/images/avatar.png" alt="avatar" :class="avatarCss" />
      <div :class="infoCss">
        <p>{{ info.name }}</p>
        <p>{{ i18n().age }}: {{ info.age }}</p>
        <p>{{ i18n().goal }}: {{ info.goal }}</p>
        <p>{{ i18n().caloDay }}:</p>
      </div>
    </div>

    <h1 style="font-size: 20px">{{ i18n().progress }}</h1>
    <div></div>

    <div></div>
  </main>
</template>

<style scoped>
.container {
  height: 100vh;
  color: aliceblue;
  padding: 5px;
}

.avatar {
  height: 70px;
  width: 70px;
  border-radius: 50%;
}

.info_container {
  display: flex;
  background-color: #6085a4;
  height: 130px;
  align-items: center;
  padding: 10px;
  border-radius: 20px;
}
.info {
  margin: 0 0 0 50px;
}
</style>
