<script setup lang="ts">
import NewsCard from '../components/NewsCard.vue'
import Banner from '../components/Banner.vue'
import IconMenu from '../components/icons/IconMenu.vue'
import { ref } from 'vue'

const listNews = [
  { id: 1, title: 'Hot search', url: './images/news1.jpg' },
  { id: 2, title: 'Bản tin 123', url: './images/news1.jpg' },
  { id: 3, title: 'Hot search', url: './images/news1.jpg' },
  { id: 4, title: 'Bản tin 123', url: './images/news1.jpg' },
  { id: 5, title: 'Hot search', url: './images/news1.jpg' },
  { id: 6, title: 'Bản tin 123', url: './images/news1.jpg' },
  { id: 7, title: 'Hot search', url: './images/news1.jpg' },
  { id: 8, title: 'Bản tin 123', url: './images/news1.jpg' },
]

const handleMenu = () => {
  console.log('ok')
}

//style
const containerCss = ref('container')
const menuTopCss = ref('menu_top')
</script>

<template>
  <IconMenu :class="menuTopCss" :onclick="handleMenu" />
  <Banner />
  <main :class="containerCss">
    <NewsCard v-for="news in listNews" :key="news.id" :title="news.title" :url="news.url" />
  </main>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap-reverse;
}

.menu_top {
  color: aliceblue;
  background-color: black;
  height: 30px;
  position: absolute;
}
</style>
