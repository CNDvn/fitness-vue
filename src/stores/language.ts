import { ELanguage } from '@/i18n'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLanguageStore = defineStore('language', () => {
  const currentLanguage = ref(ELanguage.vn)
  function changeLanguage(language: ELanguage) {
    currentLanguage.value = language
  }

  return { currentLanguage, changeLanguage }
})
