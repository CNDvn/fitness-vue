<script setup lang="ts">
import IconApple from '@/components/icons/IconApple.vue'
import IconMe from '@/components/icons/IconMe.vue'
import IconPassword from '@/components/icons/IconPassword.vue'
import { i18n } from '@/i18n'
import { useLanguageStore } from '@/stores/language'
import { useUserInfoStore } from '@/stores/user'
import { baseUrl, fetchAPI } from '@/utils/axios-middleware'
import { ref } from 'vue'

defineProps<{
  changeIsLogin: () => void
}>()

const languageStore = useLanguageStore()
const userStore = useUserInfoStore()

const payload = ref({ username: "", password: "" })
const changeData =
  (e: any) => {
    payload.value[e.target.getAttribute("label") as "username" | "password"] = e.target.value
    payload.value = { ...payload.value }
  }

const submitForm = () => {
  fetchAPI().post(`${baseUrl}/v1/api/auth/sign-in`, payload.value)
    .then(res => {
      userStore.changeUser(res.data.token)
    })
    .catch(err => console.log(err))
}
</script>

<template>
  <div class="bg-blue-900 min-h-screen flex justify-center items-center">
    <!-- Login Form Container -->
    <div class="bg-white w-96 rounded-lg shadow-lg p-6">
      <!-- Header -->
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-xl font-bold text-gray-800">
          {{ i18n[languageStore.currentLanguage].signInFitFuel }}
        </h1>
        <button class="text-gray-500 text-2xl font-bold">×</button>
      </div>

      <!-- Form -->
      <form @submit.prevent="submitForm">
        <!-- Username Input -->
        <div class="mb-4">
          <div class="flex items-center border rounded-lg px-3 py-2">
            <IconMe class="icon" />
            <input type="text" label="username" @change="changeData"
              class="w-full ml-2 bg-transparent outline-none text-sm text-gray-800"
              :placeholder="i18n[languageStore.currentLanguage].emailPhoneUsername" />
          </div>
        </div>

        <!-- Password Input -->
        <div class="mb-4">
          <div class="flex items-center border rounded-lg px-3 py-2">
            <IconPassword class="icon" />

            <input type="password" label="password" @change="changeData"
              class="w-full ml-2 bg-transparent outline-none text-sm text-gray-800"
              :placeholder="i18n[languageStore.currentLanguage].password" />
            <a href="#" class="text-xs text-blue-500 ml-2">{{ i18n[languageStore.currentLanguage].forgot }}?</a>
          </div>
        </div>

        <!-- Login Button -->
        <button type="submit"
          class="w-full bg-gray-400 text-white py-2 rounded-lg font-semibold cursor-not-allowed mb-4">
          {{ i18n[languageStore.currentLanguage].signIn }}
        </button>

        <!-- SMS Login -->
        <a href="#" class="block text-center text-blue-500 text-sm mb-4">{{
          i18n[languageStore.currentLanguage].signInSMS
        }}</a>
      </form>

      <!-- Divider -->
      <div class="flex items-center mb-4">
        <hr class="flex-grow border-gray-300" />
        <span class="px-2 text-gray-500">{{ i18n[languageStore.currentLanguage].or }}</span>
        <hr class="flex-grow border-gray-300" />
      </div>

      <!-- Social Login -->
      <div class="space-y-3">
        <button class="w-full flex items-center justify-center border rounded-lg py-2 text-gray-800">
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google"
            class="w-5 h-5 mr-3" />
          {{ i18n[languageStore.currentLanguage].continueWith }} Google
        </button>
        <button class="w-full flex items-center justify-center border rounded-lg py-2 text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-3 text-blue-600" fill="currentColor"
            viewBox="0 0 24 24">
            <path
              d="M12 2.04C6.48 2.04 2 6.52 2 12c0 4.84 3.66 8.85 8.41 9.71v-6.88h-2.54V12h2.54V9.83c0-2.49 1.49-3.88 3.76-3.88 1.09 0 2.23.2 2.23.2v2.46h-1.25c-1.23 0-1.61.77-1.61 1.56V12h2.74l-.44 2.83h-2.3v6.88C18.34 20.85 22 16.84 22 12c0-5.48-4.48-9.96-10-9.96z">
            </path>
          </svg>
          {{ i18n[languageStore.currentLanguage].continueWith }} Facebook
        </button>
        <button class="w-full flex items-center justify-center border rounded-lg py-2 text-gray-800">
          <IconApple class="icon" />
          {{ i18n[languageStore.currentLanguage].continueWith }} Apple
        </button>
      </div>

      <!-- Footer -->
      <p class="text-xs text-gray-500 text-center mt-4">
        {{ i18n[languageStore.currentLanguage].notHaveAccount }}?
        <a href="#" v-on:click="changeIsLogin" class="text-blue-500 underline">{{
          i18n[languageStore.currentLanguage].registerNow
        }}</a>
      </p>
    </div>
  </div>
</template>
