import { defineStore } from 'pinia'
import { ref } from 'vue'
import { jwtDecode } from 'jwt-decode'

type User = {
  id: string
  name: string
  username: string
}

export const useUserInfoStore = defineStore('userInfo', () => {
  const user = ref<User | null>(null)
  const userString = localStorage.getItem('user')
  if (userString) {
    user.value = JSON.parse(userString)
  }

  function changeUser(token: string) {
    const userPayload = jwtDecode<User>(token)
    localStorage.setItem('user', JSON.stringify(userPayload))
    user.value = userPayload
  }

  return { user, changeUser }
})
