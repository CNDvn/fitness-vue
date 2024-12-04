<script setup lang="ts">
import IconCake from '@/components/icons/IconCake.vue'
import IconCharDown from '@/components/icons/IconCharDown.vue'
import ProgressBar from '@/components/ProgressBar.vue'
import ProgressCycle from '@/components/ProgressCycle.vue'
import { i18n } from '@/i18n'
import { useLanguageStore } from '@/stores/language'
import { useUserInfoStore } from '@/stores/user'
import { ref } from 'vue'

const languageStore = useLanguageStore()
const userStore = useUserInfoStore()

const info = {
  name: userStore.user?.name,
  age: 20,
  currentFat: 27,
  currentMuscle: 28,
  goalFat: 15,
  goalMuscle: 40,
}

//style
const containerCss = ref('container')
const infoContainerCss = ref('info_container')
const infoCss = ref('info')
const progressContainerCss = ref('progress_container')
const optionContainerCss = ref('option_container')
</script>

<template>
  <div :class="containerCss">
    <h1 style="font-size: 20px">{{ i18n[languageStore.currentLanguage].profile }}</h1>
    <div :class="infoContainerCss">
      <ProgressCycle progress="80,100" width="w-20" height="h-20" img="/images/avatar.png" />

      <div :class="infoCss">
        <p class="font-bold">{{ info.name }}</p>
        <div style="display: flex; margin: 0.3rem 0">
          <div style="display: flex">
            <IconCake class="icon" />
            <p style="margin-left: 0.2rem">
              {{ info.age }} {{ i18n[languageStore.currentLanguage].yearsOld }}
            </p>
          </div>
          <div style="display: flex; margin-left: 1rem">
            <IconCharDown class="icon" />
            <p style="margin-left: 0.2rem">
              {{ i18n[languageStore.currentLanguage].loseWeight }}
            </p>
          </div>
        </div>
        <div style="margin: 0.3rem 0">
          <p>Standard (with meat)</p>
        </div>
        <div style="
            display: flex;
            justify-content: space-around;
            align-items: center;
            align-content: center;
          ">
          <div>
            <p>Cal left</p>
            <p class="font-bold">1.297</p>
          </div>
          <div>
            <p>Steps</p>
            <p class="font-bold">342</p>
          </div>
        </div>
      </div>
    </div>

    <div style="display: flex; justify-content: space-between">
      <h1 style="font-size: 20px">{{ i18n[languageStore.currentLanguage].progress }}</h1>
      <a href="#">{{ i18n[languageStore.currentLanguage].analysis }}</a>
    </div>
    <div :class="progressContainerCss">
      <div style="margin-bottom: 1rem">
        <h2 class="font-bold">You've lost 6 kg!</h2>
        <p>Congratulations, goal achieved!</p>
      </div>
      <div style="width: 80%">
        <ProgressBar progress="20" />
      </div>
      <div style="width: 80%; display: flex; justify-content: space-between">
        <p>58,0 kg</p>
        <p>52,0 kg</p>
      </div>
      <div>
        <button
          class="bg-blue-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
          Change goals?
        </button>
      </div>
    </div>

    <div style="display: flex; justify-content: space-between">
      <h1 style="font-size: 20px">{{ i18n[languageStore.currentLanguage].myGoals }}</h1>
      <a href="#">{{ i18n[languageStore.currentLanguage].edit }}</a>
    </div>
    <div :class="optionContainerCss">
      <div>
        <a href="">{{ i18n[languageStore.currentLanguage].nutrition }}:
          {{ i18n[languageStore.currentLanguage].highProtein }}</a>
      </div>
      <div>
        <a href="">{{ i18n[languageStore.currentLanguage].goal }}:
          {{ i18n[languageStore.currentLanguage].loseWeight }}</a>
      </div>
      <div>
        <a href="">{{ i18n[languageStore.currentLanguage].weight }}: 52,0 kg</a>
      </div>
      <div>
        <a href="">{{ i18n[languageStore.currentLanguage].calories }} 1.289 kcal</a>
      </div>
      <div>
        <a href="">{{ i18n[languageStore.currentLanguage].stepGoal }}</a>
      </div>
      <div>
        <a href="">{{ i18n[languageStore.currentLanguage].edit }}</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 430px;
  height: 100vh;
  color: aliceblue;
  padding: 1rem;
}

.info_container {
  display: flex;
  background-color: #6085a4;
  align-items: center;
  padding: 1rem;
  border-radius: 20px;
  margin: 20px 0;
}

.info {
  margin: 0 0 0 50px;
}

.progress_container {
  border-radius: 20px;
  background-color: #6085a4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: 20px 0;
  text-align: center;
  padding: 1.5rem 0;
}

.option_container {
  height: 300px;
  border-radius: 20px;
  /* background-color: #6085a4; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
}
</style>
