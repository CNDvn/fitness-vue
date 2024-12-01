<script setup lang="ts">
import { ref } from 'vue'
import BottomNav from './components/BottomNav.vue'
import SignInView from './views/SignInView.vue'
import SignUpView from './views/SignUpView.vue'
import { useUserInfoStore } from './stores/user'

const userStore = useUserInfoStore()
const isLogin = ref(false)
const changeIsLogin = () => (isLogin.value = !isLogin.value)
</script>

<template>
  <div style="width: 430px; background-color: #1d2b45">
    <RouterView v-if="userStore.user" />
    <BottomNav v-if="userStore.user" />

    <SignInView v-if="!userStore.user && isLogin" :changeIsLogin="changeIsLogin" />
    <SignUpView v-if="!userStore.user && !isLogin" :changeIsLogin="changeIsLogin" />
  </div>
</template>
