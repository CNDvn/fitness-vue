<script setup lang="ts">
import { ref } from 'vue'
import BottomNav from './components/BottomNav.vue'
import SignInView from './views/SignInView.vue'
import SignUpView from './views/SignUpView.vue'
import { useUserInfoStore } from './stores/user'

const userStore = useUserInfoStore()
const isLogin = ref(false)
const changeIsLogin = () => {
  console.log('change')
  isLogin.value = true
}
</script>

<template>
  <div v-if="userStore.user">
    <RouterView />
    <BottomNav />
  </div>

  <SignInView v-if="!userStore.user && isLogin" />
  <SignUpView v-if="!userStore.user && !isLogin" :changeIsLogin="changeIsLogin" />
</template>
