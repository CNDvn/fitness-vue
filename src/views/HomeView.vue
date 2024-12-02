<script setup lang="ts">
import NewsCard from '../components/NewsCard.vue'
import Banner from '../components/Banner.vue'
import IconMenu from '../components/icons/IconMenu.vue'
import { ref } from 'vue'
import Search from '../components/Search.vue'
import IconLock from '@/components/icons/IconLock.vue'

const listNews = [
  {
    id: 1,
    title: 'Eat clean không khó như bạn nghĩ?',
    url: './images/eat-clean.jpg',
    content: 'ear clean hiện nay không cho ăn thịt chó',
  },
  {
    id: 2,
    title: 'Chế độ giảm cân 16:8 có thật sự là biện pháp an toàn',
    url: './images/che do.jpeg',
    content: 'Chế độ 16:8 là chế độ bạn thực sự cần thiết',
  },
  {
    id: 3,
    title: 'Các bài tập vai trong hiệu quả',
    url: './images/shoulder.jpg',
    content: 'các bài tập vai hiệu quả bao gồm',
  },
  {
    id: 4,
    title: 'Nữ giới, tập nặng có thật sự nguy hiểm',
    url: './images/girl-squat.jpg',
    content: 'Nữ giới tập nặng sẽ cần chích roi',
  },
  { id: 5, title: 'Hot search', url: './images/news1.jpg', content: 'tét' },
  { id: 6, title: 'Bản tin 123', url: './images/news1.jpg', content: 'tét' },
  { id: 7, title: 'Hot search', url: './images/news1.jpg', content: 'tét' },
  { id: 8, title: 'Bản tin 123', url: './images/news1.jpg', content: 'tét' },
  { id: 9, title: 'Hot search', url: './images/news1.jpg', content: 'tét' },
  { id: 10, title: 'Bản tin 123', url: './images/news1.jpg', content: 'tét' },
]

const openMenu = ref(false)
const handleMenu = () => {
  openMenu.value = !openMenu.value
}

//style
const containerCss = ref('container')
const menuTopCss = ref('menu_top')
</script>

<template>
  <div style="
      display: flex;
      justify-content: space-between;
      padding: 10px 20px;
      color: aliceblue;
      align-items: center;
    ">
    <IconMenu :class="menuTopCss" :onclick="handleMenu" />
    <div v-if="openMenu"
      style="background-color: black; color: aliceblue; position: absolute; top: 45px; padding: 1rem;">
      <ul>
        <li>Nhật ký</li>
        <li>Tập luyện</li>
        <li>Thực đơn</li>
        <li>Bữa ăn</li>
        <li style="display: flex; justify-content: space-between;">
          <p>Plan bài tập theo yêu cầu</p>
          <IconLock class="icon" />
        </li>
        <li style="display: flex; justify-content: space-between;">

          <p>Thực đơn theo yêu cầu</p>
          <IconLock class="icon" />
        </li>
        <li style="display: flex; justify-content: space-between;">

          <p>Tổng đài tư vấn</p>
          <IconLock class="icon" />
        </li>
        <li style="display: flex; justify-content: space-between;">

          <p>Nhóm chất cần bổ sung</p>
          <IconLock class="icon" />
        </li>
        <li>Cài đặt</li>
      </ul>
    </div>
    <Search style="width: 90%; height: 30px" />
  </div>
  <Banner />
  <div :class="containerCss">
    <NewsCard v-for="news in listNews" :key="news.id" :title="news.title" :url="news.url" :content="news.content" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: start;
  background-color: aliceblue;
  min-height: 70vh;
}

.menu_top {
  color: aliceblue;
  background-color: #1d2b45;
  height: 30px;
}
</style>
