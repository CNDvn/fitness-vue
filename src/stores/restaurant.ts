import { defineStore } from 'pinia'
import { ref } from 'vue'

const data = [
  {
    id: 1,
    name: 'Nhà hàng KnMeal - Healthy & Eatclean (Thực phẩm sức khoẻ)',
    logo: '/images/kmeal.jpg',
    description: 'Healthy & Eatclean',
    rate: '4.8 (500+)',
    wasOrdered: true,
    distance: '30 phút tới · 7.8 km',
    foods: [
      {
        id: 1,
        name: 'Poke đậu hũ nấm',
        calo: 430,
        pro: 24,
        carb: 60,
        fat: 15,
        detail: 'Đậu hũ chiên vàng, rau củ tươi',
        price: 129000,
        img: '/images/1.jpg',
      },
      {
        id: 2,
        name: 'Poke cơm lứt Tôm',
        calo: 362,
        pro: 32,
        carb: 49,
        fat: 15,
        detail: 'Cơm lứt, rau tươi, tôm, trứng cút',
        price: 162000,
        img: '/images/2.jpg',
      },
      {
        id: 3,
        name: 'Poke cơm lứt ức gà',
        calo: 398,
        pro: 30,
        carb: 65,
        fat: 12,
        detail: 'Cơm lứt, rau tươi, tôm, trứng cút',
        price: 124000,
        img: '/images/3.jpg',
      },
      {
        id: 4,
        name: 'Poke cơm lứt ức gà',
        calo: 398,
        pro: 30,
        carb: 65,
        fat: 12,
        detail: 'Cơm lứt, rau tươi, tôm, trứng cút',
        price: 124000,
        img: '/images/4.jpg',
      },
    ],
  },
  {
    id: 2,
    name: 'Nhà hàng Poke Saigon - Ly Tu Trong ',
    logo: '/images/poke.jpg',
    description: 'Ly Tú Trọng',
    rate: '4.5 (345)',
    wasOrdered: true,
    distance: '15 phút tới · 5 km',
    foods: [
      {
        id: 1,
        name: 'Poke đậu hũ nấm',
        calo: 430,
        pro: 24,
        carb: 60,
        fat: 15,
        detail: 'Đậu hũ chiên vàng, rau củ tươi',
        price: 129000,
        img: '/images/1.jpg',
      },
      {
        id: 2,
        name: 'Poke cơm lứt Tôm',
        calo: 362,
        pro: 32,
        carb: 49,
        fat: 15,
        detail: 'Cơm lứt, rau tươi, tôm, trứng cút',
        price: 162000,
        img: '/images/2.jpg',
      },
      {
        id: 3,
        name: 'Poke cơm lứt ức gà',
        calo: 398,
        pro: 30,
        carb: 65,
        fat: 12,
        detail: 'Cơm lứt, rau tươi, tôm, trứng cút',
        price: 124000,
        img: '/images/3.jpg',
      },
      {
        id: 4,
        name: 'Poke cơm lứt ức gà',
        calo: 398,
        pro: 30,
        carb: 65,
        fat: 12,
        detail: 'Cơm lứt, rau tươi, tôm, trứng cút',
        price: 124000,
        img: '/images/4.jpg',
      },
    ],
  },
  {
    id: 3,
    name: 'Nhà hàng Smoothie Factory Vietnam',
    logo: '/images/smothie.jpg',
    description: 'Smoothies & Healthy Drinks',
    details: '4.2 (200) · Đã từng đặt',
    rate: '4.2 (200)',
    wasOrdered: true,
    distance: null,
    foods: [
      {
        id: 1,
        name: 'Smoothie đậu hũ nấm',
        calo: 430,
        pro: 24,
        carb: 60,
        fat: 15,
        detail: 'Đậu hũ chiên vàng, rau củ tươi',
        price: 129000,
        img: '/images/1.jpg',
      },
      {
        id: 2,
        name: 'Smoothie cơm lứt Tôm',
        calo: 362,
        pro: 32,
        carb: 49,
        fat: 15,
        detail: 'Cơm lứt, rau tươi, tôm, trứng cút',
        price: 162000,
        img: '/images/2.jpg',
      },
      {
        id: 3,
        name: 'Smoothie cơm lứt ức gà',
        calo: 398,
        pro: 30,
        carb: 65,
        fat: 12,
        detail: 'Cơm lứt, rau tươi, tôm, trứng cút',
        price: 124000,
        img: '/images/3.jpg',
      },
      {
        id: 4,
        name: 'Smoothie cơm lứt ức gà',
        calo: 398,
        pro: 30,
        carb: 65,
        fat: 12,
        detail: 'Cơm lứt, rau tươi, tôm, trứng cút',
        price: 124000,
        img: '/images/4.jpg',
      },
    ],
  },
]

export const useRestaurant = defineStore('restaurantStore', () => {
  const restaurantInfo = ref<{
    id: number
    name: string
    logo: string
    description: string
    rate: string
    wasOrdered: boolean
    distance: string | null
    foods: {
      id: number
      name: string
      calo: number
      pro: number
      carb: number
      fat: number
      detail: string
      price: number
      img: string
    }[]
  }>()

  function setRestaurant(id: number) {
    restaurantInfo.value = data[id - 1]
  }

  return { restaurantInfo, setRestaurant }
})
