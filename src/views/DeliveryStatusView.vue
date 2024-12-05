<script setup lang="ts">
import { useDeliveryStore } from '@/stores/delevery';
import { formatCurrencyVN } from '@/utils/format-currency';
import { useRoute } from 'vue-router';

const route = useRoute();
const orderId = route.params.id;

const deliveryStore = useDeliveryStore()
const orderInfo = deliveryStore.getDeliveryById(Number(orderId))


</script>

<template>
    <div style="overflow: auto; height: 100vh; width: 100%; background-color: #f7f7f7">
        <!-- Header -->
        <div class="p-4 shadow-md bg-blue-500 text-white">
            <h1 class="text-2xl font-bold">Trạng thái giao hàng</h1>
            <p class="text-sm">Mã đơn hàng: {{ orderId }}</p>
        </div>

        <!-- Delivery Status -->
        <div class="p-4">
            <h2 class="text-xl font-bold text-center">
                {{ orderInfo?.status }}
            </h2>
            <p class="text-sm text-center text-gray-500">Dự tính giao trong: {{ orderInfo?.estimateDeliveryTime }} phút
            </p>
        </div>

        <!-- Order Details -->
        <div class="p-4 bg-white shadow rounded-lg m-4">
            <h3 class="text-lg font-bold">Order Details</h3>
            <p class="text-sm text-gray-600">Restaurant: {{ orderInfo?.restaurantName }}</p>
            <p class="text-sm text-gray-600">Delivery Address: {{ orderInfo?.deliveryAddress }}</p>
            <p class="text-sm text-gray-600">Total Price: {{ formatCurrencyVN.format(Number(orderInfo?.totalPrice)) }}
            </p>
        </div>

        <!-- Footer -->
        <div style="
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #fff;
        border-top: 1px solid #eaeaea;
      " class="p-4 flex justify-center items-center">
            <button class="bg-blue-500 text-white rounded-lg px-6 py-2 font-bold" v-on:click="$router.push('/')">
                Back to Home
            </button>
        </div>
    </div>
</template>
