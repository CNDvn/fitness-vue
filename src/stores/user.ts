import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserInfoStore = defineStore('userInfo', () => {
  const user = ref(localStorage.getItem('user'))
  function changeUser(_user: string) {
    user.value = _user
    localStorage.setItem('user', user.value)
  }

  return { user, changeUser }
})
