<script setup lang="ts">
import CartDetail from '@/components/CartDetail.vue'
import FoodDetail from '@/components/FoodDetail.vue'
import IconCart from '@/components/icons/IconCart.vue'
import { useCartStore } from '@/stores/cart'
import { useRestaurant } from '@/stores/restaurant'
import { formatCurrencyVN } from '@/utils/format-currency'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id

const restaurantStore = useRestaurant()
restaurantStore.setRestaurant(Number(id))

const cartStore = useCartStore()

const getItemQuantity = (id: number) => {
  const item = cartStore.cartItems.find((i) => i.id === id && i.restaurantId === id)
  if (!item) return '+'
  return item.quantity
}

const activeFood = ref<{
  id: Number
  name: String
  calo: Number
  pro: Number
  carb: Number
  fat: Number
  detail: String
  price: Number
  img: String
} | null>(null)

const openCartDetail = ref(false)
</script>

<template>
  <div style="overflow: auto; height: 100vh; width: 100%">
    <CartDetail v-if="openCartDetail" @close="() => (openCartDetail = false)" />
    <div v-if="!openCartDetail">
      <FoodDetail
        v-if="activeFood?.id"
        @close="() => (activeFood = null)"
        :activeFood="activeFood"
        :id="activeFood.id"
        :name="activeFood.name"
        :calo="activeFood.calo"
        :carb="activeFood.carb"
        :detail="activeFood.detail"
        :fat="activeFood.fat"
        :img="activeFood.img"
        :price="activeFood.price"
        :pro="activeFood.pro"
        :restaurantId="restaurantStore.restaurantInfo?.id"
      />
      <div v-if="!activeFood">
        <!-- Header nhà hàng -->
        <div class="p-4 rounded-b-lg shadow-lg" style="background-color: #6e90ad">
          <div class="flex items-center">
            <!-- Logo nhà hàng -->
            <img
              :src="restaurantStore.restaurantInfo?.logo"
              alt="Restaurant Logo"
              class="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h1 class="text-xl font-bold">{{ restaurantStore.restaurantInfo?.name }}</h1>
              <div class="flex items-center text-yellow-400">
                <span>{{
                  '★ '.repeat(Number(restaurantStore.restaurantInfo?.rate.split(' ')[0]))
                }}</span>
                <p class="text-sm text-gray-300 ml-2">
                  {{ restaurantStore.restaurantInfo?.rate.split(' ')[1] }}
                </p>
              </div>
              <p class="text-sm">{{ restaurantStore.restaurantInfo?.distance }}</p>
            </div>
          </div>
        </div>

        <!-- Danh sách món ăn -->
        <div class="p-4">
          <h2 class="text-lg font-bold mb-2" style="color: aliceblue">Poke cơm lứt</h2>
          <div class="space-y-4">
            <!-- Item  -->
            <div
              v-for="food in restaurantStore.restaurantInfo?.foods"
              :key="food.id"
              class="flex items-center bg-white text-gray-800 rounded-lg shadow p-4"
            >
              <img
                :src="food.img"
                :alt="food.name"
                class="w-20 h-20 rounded-lg mr-4"
                v-on:click="
                  () =>
                    (activeFood = {
                      id: food.id,
                      calo: food.calo,
                      carb: food.carb,
                      detail: food.detail,
                      fat: food.fat,
                      img: food.img,
                      name: food.name,
                      price: food.price,
                      pro: food.pro,
                    })
                "
              />
              <div
                class="flex-1"
                v-on:click="
                  () =>
                    (activeFood = {
                      id: food.id,
                      calo: food.calo,
                      carb: food.carb,
                      detail: food.detail,
                      fat: food.fat,
                      img: food.img,
                      name: food.name,
                      price: food.price,
                      pro: food.pro,
                    })
                "
              >
                <h3 class="font-bold">{{ food.name }}</h3>
                <p class="text-sm text-gray-500">
                  calo: {{ food.calo }} · Pro: {{ food.pro }} · carb: {{ food.carb }} · Fat:
                  {{ food.fat }}
                </p>
                <p class="text-sm text-gray-500">{{ food.detail }}</p>
                <p class="font-bold text-lg text-blue-500">
                  {{ formatCurrencyVN.format(food.price) }}
                </p>
              </div>
              <!-- decrement -->
              <button
                class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
                v-on:click="
                  cartStore.removeQuantityItem(food.id, restaurantStore.restaurantInfo?.id)
                "
                v-if="Boolean(cartStore.cartItems.find((i) => i.id === food.id))"
              >
                -
              </button>
              <!-- increment -->
              <button
                class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
                v-on:click="
                  cartStore.addItem({
                    restaurantId: restaurantStore.restaurantInfo?.id,
                    id: food.id,
                    image: food.img,
                    name: food.name,
                    price: food.price,
                    quantity: 1,
                  })
                "
              >
                {{ getItemQuantity(food.id) }}
              </button>
            </div>
          </div>
        </div>
        <!-- Nút giỏ hàng -->
      </div>
      <div
        style="
          width: 100%;
          position: fixed;
          bottom: 65px;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
        "
      >
        <button
          class="bg-blue-500 text-white rounded-full p-3 shadow-lg flex items-center"
          v-on:click="() => (openCartDetail = true)"
        >
          <IconCart class="icon" />
        </button>
      </div>
    </div>
  </div>
</template>
