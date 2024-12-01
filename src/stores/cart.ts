import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore('cartStore', () => {
  const cartItems = ref<
    {
      id: number
      restaurantId?: number
      name: string
      price: number
      quantity: number
      image: string
    }[]
  >([])

  function removeItem(id: number, restaurantId?: number) {
    cartItems.value = cartItems.value.filter(
      (item) => item.id !== id && item.restaurantId === restaurantId,
    )
  }

  function removeQuantityItem(id: number, restaurantId?: number) {
    const item = cartItems.value.find((i) => i.id === id && item?.restaurantId === restaurantId)

    if (item && item.quantity > 1) {
      item.quantity -= 1
      cartItems.value = [...cartItems.value]
      return
    }

    if (item && item.quantity === 1) {
      removeItem(id)
    }
  }

  function addItem(item: {
    id: number
    restaurantId?: number
    name: string
    price: number
    quantity: number
    image: string
  }) {
    const index = cartItems.value.findIndex((i) => i.id === item.id)
    if (index === -1) {
      cartItems.value = [...cartItems.value, item]
    } else {
      cartItems.value[index].quantity += item.quantity
      cartItems.value = [...cartItems.value]
    }
  }

  function clearCart() {
    cartItems.value = []
  }

  return { cartItems, removeItem, clearCart, addItem, removeQuantityItem }
})
