<script setup lang="ts">
import { i18n } from '@/i18n'
import { useLanguageStore } from '@/stores/language'
import { ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import IconDiary from './icons/IconDiary.vue'
import IconFood from './icons/IconFood.vue'
import IconHome from './icons/IconHome.vue'
import IconMe from './icons/IconMe.vue'
import IconWorkout from './icons/IconWorkout.vue'

const languageStore = useLanguageStore()

const route = useRoute()
const currentRoute = ref(route.fullPath)
watch(route, () => {
  currentRoute.value = route.fullPath
})

// style
const containerCss = ref('container-nav')
const routerCss = ref('router')
const routeActiveCss = ref('route_active')
</script>

<template>
  <div :class="containerCss">
    <nav
      style="
        height: 60px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #545454;
        color: aliceblue;
        padding: 5px;
        width: 430px;
        position: fixed;
        bottom: 0;
      "
    >
      <RouterLink :class="currentRoute === '/' ? routeActiveCss : routerCss" to="/">
        <IconHome class="icon" />
        <div>{{ i18n[languageStore.currentLanguage].home }}</div>
      </RouterLink>

      <RouterLink :class="currentRoute === '/diary' ? routeActiveCss : routerCss" to="/diary">
        <IconDiary class="icon" />
        <div>{{ i18n[languageStore.currentLanguage].diary }}</div>
      </RouterLink>

      <RouterLink :class="currentRoute === '/workout' ? routeActiveCss : routerCss" to="/workout">
        <IconWorkout class="icon" />
        <div>{{ i18n[languageStore.currentLanguage].workout }}</div>
      </RouterLink>

      <RouterLink :class="currentRoute === '/meal' ? routeActiveCss : routerCss" to="/meal">
        <IconFood class="icon" />
        <div>{{ i18n[languageStore.currentLanguage].meal }}</div>
      </RouterLink>

      <RouterLink :class="currentRoute === '/me' ? routeActiveCss : routerCss" to="/me">
        <IconMe class="icon" />
        <div>{{ i18n[languageStore.currentLanguage].me }}</div>
      </RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.container-nav {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
}

.router {
  display: flex;
  flex-direction: column;
}

.route_active {
  display: flex;
  flex-direction: column;
  color: #56dffd;
}
</style>
