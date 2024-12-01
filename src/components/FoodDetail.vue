<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import IconClose from './icons/IconClose.vue'
import { formatCurrencyVN } from '@/utils/format-currency'

const props = defineProps({
  id: Number,
  restaurantId: Number,
  name: String,
  calo: Number,
  pro: Number,
  carb: Number,
  fat: Number,
  detail: String,
  price: Number,
  img: String,
})

const emitClose = defineEmits(['close'])
const cartStore = useCartStore()

const getItemQuantity = (id: number) => {
  const item = cartStore.cartItems.find((i) => i.id === id && i.restaurantId === props.restaurantId)
  if (!item) return '+'
  return item.quantity
}
</script>

<template>
  <div class="min-h-screen flex flex-col items-center p-4">
    <div
      style="
        display: flex;
        justify-content: flex-end;
        width: 100%;
        margin-bottom: 0.3rem;
        color: aliceblue;
      "
    >
      <button
        v-on:click="
          () => {
            emitClose('close', null)
          }
        "
      >
        <IconClose class="icon" />
      </button>
    </div>
    <!-- Card món ăn -->
    <div class="bg-white w-full max-w-sm rounded-lg shadow-lg overflow-hidden">
      <!-- Hình ảnh món ăn -->
      <img src="/images/3.jpg" alt="Poke cơm lứt Tôm" class="w-full h-40 object-cover" />

      <!-- Nutrition Info -->
      <div class="flex justify-around bg-gray-100 p-4 text-center">
        <div>
          <p class="text-sm font-bold">Protein</p>
          <p class="text-lg font-bold text-blue-500">{{ pro }}</p>
          <p class="text-xs">g</p>
        </div>
        <div>
          <p class="text-sm font-bold">Calo</p>
          <p class="text-lg font-bold text-blue-500">{{ calo }}</p>
          <p class="text-xs">KCAL</p>
        </div>
        <div>
          <p class="text-sm font-bold">Carb</p>
          <p class="text-lg font-bold text-blue-500">{{ carb }}</p>
          <p class="text-xs">g</p>
        </div>
        <div>
          <p class="text-sm font-bold">Fat</p>
          <p class="text-lg font-bold text-blue-500">{{ fat }}</p>
          <p class="text-xs">g</p>
        </div>
      </div>

      <!-- Description -->
      <div class="p-4">
        <h2 class="text-lg font-bold mb-2">{{ name }}</h2>
        <p class="text-sm text-gray-600 mb-2">
          calo: {{ calo }} · Pro: {{ pro }} · carb: {{ carb }} · Fat: {{ fat }}
        </p>
        <p class="text-sm text-gray-600 mb-4">
          {{ detail }}
        </p>
        <div class="flex justify-between items-center">
          <p class="text-lg font-bold text-blue-500">
            {{ formatCurrencyVN.format(Number(price)) }}
          </p>
          <div class="flex">
            <button
              class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mx-2"
              v-on:click="cartStore.removeQuantityItem(Number(id), Number(restaurantId))"
            >
              -
            </button>

            <!-- increment -->
            <button
              class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
              v-on:click="
                cartStore.addItem({
                  restaurantId: Number(restaurantId),
                  id: Number(id),
                  image: String(img),
                  name: String(name),
                  price: Number(price),
                  quantity: 1,
                })
              "
            >
              {{ getItemQuantity(Number(id)) }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Bình luận -->
    <div class="w-full max-w-sm mt-4 p-4 bg-blue-200 rounded-lg shadow-lg">
      <h3 class="text-lg font-bold mb-2">Bình luận</h3>
      <!-- Form nhập bình luận -->
      <textarea
        class="w-full p-2 border border-gray-300 rounded-lg text-sm"
        placeholder="Nhập bình luận của bạn..."
      ></textarea>
      <button class="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg font-bold">Gửi</button>
    </div>

    <!-- Nút giỏ hàng cố định -->
    <button
      class="fixed bottom-4 right-4 bg-blue-500 text-white rounded-full p-3 shadow-lg flex items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3 3h2l.4 2M7 13h10l3-8H6.4M7 13l-1.4 5.4a1 1 0 001 1.6h10.8a1 1 0 001-1.6L17 13M9 16h6"
        />
      </svg>
    </button>
  </div>
</template>
