<script setup lang="ts">
import { useCartStore } from '@/stores/cart';
import { useDeliveryStore } from '@/stores/delevery';
import { useRestaurant } from '@/stores/restaurant';
import { computed, ref } from 'vue';
import IconClose from './icons/IconClose.vue';
import router from '@/router';

const cartStore = useCartStore()
const restaurantStore = useRestaurant()
const totalPrice = computed(() =>
  cartStore.cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
)

const emitClose = defineEmits(['close'])

const methodPay = ref("cash")
const r = router
const deliveryStore = useDeliveryStore()
const order = () => {
  const restaurant = restaurantStore.getRestaurant(cartStore.cartItems[0].restaurantId)
  const orderId = deliveryStore.createDelivery({
    totalPrice: totalPrice.value,
    deliveryAddress: "37 Nam Kỳ Khởi Nghĩa, phường Nguyễn Thái Bình, quận 1, TP. HCM",
    methodPay: methodPay.value,
    restaurantName: restaurant.name
  })
  r.push(`/delivery/${orderId}`)
}
</script>

<template>
  <div class="bg-white rounded-lg shadow-lg max-w-md w-full p-4">
    <div style="display: flex; justify-content: flex-end; width: 100%; margin-bottom: 0.3rem">
      <button v-on:click="() => {
        emitClose('close', null)
      }
        ">
        <IconClose class="icon" />
      </button>
    </div>
    <!-- Header -->
    <div class="flex justify-between items-center border-b pb-2 mb-4">
      <h2 class="text-lg font-bold">Giỏ hàng</h2>
      <button @click="cartStore.clearCart" class="text-sm text-red-500 hover:underline">
        Xóa tất cả
      </button>
    </div>

    <!-- Danh sách đơn hàng -->
    <div v-if="cartStore.cartItems.length > 0">
      <div v-for="item in cartStore.cartItems" :key="item.id" class="flex items-center justify-between mb-4">
        <div class="flex items-center">
          <img :src="item.image" alt="product" class="w-16 h-16 rounded-lg object-cover mr-4" />
          <div>
            <h3 class="font-bold text-gray-800">{{ item.name }}</h3>
            <p class="text-sm text-gray-600">{{ item.price }}₫ x {{ item.quantity }}</p>
          </div>
        </div>
        <button @click="cartStore.removeItem(item.id)" class="text-red-500 hover:underline text-sm">
          Xóa
        </button>
      </div>

      <!-- Tổng tiền -->
      <div class="border-t pt-4">
        <div class="flex justify-between items-center">
          <p class="font-bold">Tổng cộng</p>
          <p class="font-bold text-blue-500">{{ totalPrice }}₫</p>
        </div>

        <button v-on:click="order"
          class="flex items-center justify-center bg-blue-500 text-white font-semibold px-2 py-2 rounded-lg shadow-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none transition mt-3">
          <span class="mr-2">Thanh toán</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
            class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M17 9l4-4m0 0l-4-4m4 4H7m6 14l-4-4m0 0l4-4m-4 4h10" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Giỏ hàng rỗng -->
    <div v-else class="text-center">
      <p class="text-gray-600">Giỏ hàng của bạn đang trống.</p>
    </div>
  </div>
</template>

<style scoped>
/* Thêm style nếu cần */
</style>
