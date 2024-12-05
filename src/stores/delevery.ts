import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDeliveryStore = defineStore('delivery', () => {
  const deliveries = ref<
    Array<{
      id: number
      status: string
      estimateDeliveryTime: number
      restaurantName: string
      deliveryAddress: string
      totalPrice: number
      methodPay: string
    }>
  >([])

  function getDeliveryById(id: number) {
    return deliveries.value.find((i) => i.id === id)
  }

  function createDelivery({
    deliveryAddress,
    methodPay,
    restaurantName,
    totalPrice,
  }: {
    restaurantName: string
    deliveryAddress: string
    totalPrice: number
    methodPay: string
  }) {
    const idx = deliveries.value.length + 1
    deliveries.value = [
      ...deliveries.value,
      {
        id: idx,
        restaurantName,
        deliveryAddress,
        estimateDeliveryTime: 13,
        methodPay,
        status: 'Đang chuẩn bị',
        totalPrice,
      },
    ]
    return idx
  }

  return { deliveries, getDeliveryById, createDelivery }
})
