<script setup lang="ts">
import IconPin from '@/components/icons/IconPin.vue'
import IconRightArrow from '@/components/icons/IconRightArrow.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import { i18n } from '@/i18n'
import { useLanguageStore } from '@/stores/language'
import { RouterLink } from 'vue-router'
const languageStore = useLanguageStore()

const categories = [
  { id: 1, name: 'Cơm', image: '/images/com.jpg' },
  { id: 2, name: 'Bún', image: '/images/bun.jpg' },
  { id: 3, name: 'Salad', image: '/images/salad.jpg' },
  { id: 4, name: 'Hải sản', image: '/images/hai-san.jpg' },
  { id: 5, name: 'Đồ uống', image: '/images/do-uong.jpg' },
]
const foods = [
  { id: 1, name: 'Cơm gạo lứt cá hồi', image: '/images/com.jpg' },
  { id: 2, name: 'Salad gà nướng mật ong', image: '/images/salad.jpg' },
  { id: 3, name: 'Nước ép táo', image: '/images/do-uong.jpg' },
  { id: 1, name: 'Cơm gạo lứt cá hồi', image: '/images/com.jpg' },
  { id: 2, name: 'Salad gà nướng mật ong', image: '/images/salad.jpg' },
  { id: 3, name: 'Nước ép táo', image: '/images/do-uong.jpg' },
]
const restaurants = [
  {
    id: 1,
    name: 'Nhà hàng KnMeal - Healthy & Eatclean (Thực phẩm sức khoẻ)',
    logo: '/images/kmeal.jpg',
    description: 'Healthy & Eatclean',
    rate: '4.8 (500+)',
    wasOrdered: true,
    distance: '30 phút tới · 7.8 km',
  },
  {
    id: 2,
    name: 'Nhà hàng Poke Saigon - Ly Tu Trong ',
    logo: '/images/poke.jpg',
    description: 'Ly Tú Trọng',
    rate: '4.5 (345)',
    wasOrdered: true,
    distance: '15 phút tới · 5 km',
  },
  {
    id: 3,
    name: 'Nhà hàng Smoothie Factory Vietnam',
    logo: '/images/smothie.jpg',
    description: 'Smoothies & Healthy Drinks',
    rate: '4.2 (200)',
    wasOrdered: true,
    distance: null,
  },
]
</script>

<template>
  <div style="display: flex; justify-content: flex-start; padding: 10px; color: aliceblue">
    <IconPin class="icon" />
    <h4>465A, Điện Biên Phủ, Phường 25, Quận Bình Thạnh</h4>
  </div>

  <div>
    <div style="display: flex; justify-content: center; padding: 10px 0">
      <div
        class="flex items-center bg-teal-800 rounded-full px-4 py-2 w-11/12"
        style="background-color: aliceblue"
      >
        <IconSearch class="icon" />
        <input
          type="text"
          :placeholder="i18n[languageStore.currentLanguage].search"
          class="bg-transparent focus:outline-none text-back placeholder-gray-300 ml-3 w-full"
          style="background-color: aliceblue"
        />
      </div>
    </div>
    <div
      style="
        color: aliceblue;
        display: flex;
        justify-content: space-around;
        overflow: auto;
        padding: 10px;
      "
    >
      <div
        v-for="category in categories"
        :key="category.id"
        style="display: flex; flex-direction: column; align-items: center; margin: 0 0.5rem"
      >
        <img
          :src="category.image"
          :alt="category.name"
          style="height: 70%; width: 70%; border-radius: 50%"
        />
        <div style="width: 4rem; text-align: center">
          <p class="text-base">{{ category.name }}</p>
        </div>
      </div>
    </div>
  </div>

  <div style="background-color: #6e90ad; height: 100vh; padding: 0.9rem; overflow: auto">
    <div style="display: flex; justify-content: space-between">
      <div style="display: flex; color: aliceblue; align-items: center">
        <p class="font-bold">flash Sale</p>
        <div
          style="
            margin-left: 0.5rem;
            background-color: #7bb7e0;
            text-align: center;
            padding: 5px;
            border-radius: 0.5rem;
          "
        >
          16
        </div>
        :
        <div
          style="background-color: #7bb7e0; text-align: center; padding: 5px; border-radius: 0.5rem"
        >
          11
        </div>
        :
        <div
          style="background-color: #7bb7e0; text-align: center; padding: 5px; border-radius: 0.5rem"
        >
          04
        </div>
      </div>
      <div style="color: aliceblue">
        <a href="#"> Tất cả <IconRightArrow class="icon" style="color: #7bb7e0" /> </a>
      </div>
    </div>
    <div
      style="
        color: aliceblue;
        display: flex;
        justify-content: space-around;
        overflow-x: scroll;
        overflow-y: hidden;
        height: 150px;
      "
    >
      <div
        v-for="food in foods"
        :key="food.id"
        style="
          margin: 0 0.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          align-content: center;
        "
      >
        <img
          :src="food.image"
          :alt="food.name"
          style="width: 100px; aspect-ratio: 1 / 1; border-radius: 0.5rem"
        />
        <div
          style="
            text-align: left;
            width: 7rem;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
          "
        >
          <p>{{ food.name }}</p>
        </div>
      </div>
    </div>
    <div style="color: aliceblue; margin: 0.5rem 0">
      <h3 class="font-bold text-xl">Nhà hàng</h3>
      <div>
        <RouterLink
          v-for="restaurant in restaurants"
          :key="restaurant.id"
          :to="{ name: 'restaurant-detail', params: { id: restaurant.id } }"
        >
          <div style="display: flex; margin: 1rem 0; align-items: center">
            <img
              :src="restaurant.logo"
              :alt="restaurant.name"
              style="width: 30%; border-radius: 50%"
            />
            <div style="margin: 1rem">
              <div
                style="
                  text-align: left;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                  text-overflow: ellipsis;
                "
              >
                <p class="font-bold">{{ restaurant.name }}</p>
              </div>
              <div
                style="
                  text-align: left;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                  text-overflow: ellipsis;
                "
              >
                <p>
                  {{ restaurant.rate }} ·
                  {{ restaurant.wasOrdered ? 'Đã từng đặt' : 'Chưa từng đặt' }}
                </p>
                <p>{{ restaurant.distance }}</p>
              </div>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
