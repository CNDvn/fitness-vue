<script setup lang="ts">
import IconSearch from './icons/IconSearch.vue'
import { i18n } from '@/i18n'
import { useLanguageStore } from '@/stores/language'

const languageStore = useLanguageStore()
</script>

<template>
  <div
    class="flex items-center bg-teal-800 rounded-full px-4 py-2 w-64"
    style="background-color: #0b5575"
  >
    <IconSearch class="icon" />
    <input
      type="text"
      :placeholder="i18n[languageStore.currentLanguage].search"
      class="bg-transparent focus:outline-none text-white placeholder-gray-300 ml-3 w-full"
      style="background-color: #0b5575"
    />
  </div>
</template>
