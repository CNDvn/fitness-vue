<script setup lang="ts">
import { ref, computed } from 'vue'
import IconClose from './icons/IconClose.vue'
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()
const totalPrice = computed(() =>
  cartStore.cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
)

const emitClose = defineEmits(['close'])
</script>

<template>
  <div class="bg-white rounded-lg shadow-lg max-w-md w-full p-4">
    <div style="display: flex; justify-content: flex-end; width: 100%; margin-bottom: 0.3rem">
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
    <!-- Header -->
    <div class="flex justify-between items-center border-b pb-2 mb-4">
      <h2 class="text-lg font-bold">Giỏ hàng</h2>
      <button @click="cartStore.clearCart" class="text-sm text-red-500 hover:underline">
        Xóa tất cả
      </button>
    </div>

    <!-- Danh sách đơn hàng -->
    <div v-if="cartStore.cartItems.length > 0">
      <div
        v-for="item in cartStore.cartItems"
        :key="item.id"
        class="flex items-center justify-between mb-4"
      >
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
