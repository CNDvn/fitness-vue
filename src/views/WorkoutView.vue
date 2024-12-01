<script setup lang="ts">
import { ref } from 'vue'
import TopBar from '../components/TopBar.vue'
import { i18n } from '@/i18n'
import { useLanguageStore } from '@/stores/language'

const languageStore = useLanguageStore()

const title = 'Hi, bài tập của bạn'

//style
const containerCss = ref('container')
const layer1Css = ref('layer1')
const layer2Css = ref('layer2')
</script>
<template>
  <div :class="containerCss">
    <TopBar :title="title" />
    <div :class="layer1Css">
      <h2 class="font-bold text-lg">{{ i18n[languageStore.currentLanguage].upperBody }}</h2>
      <div :class="layer2Css">
        <div style="display: flex; justify-content: space-between">
          <div style="background-color: #818181; text-align: center; border-radius: 10px">
            <h4 class="font-bold text-base">{{ i18n[languageStore.currentLanguage].shoulders }}</h4>
            <img src="/images/vai.png" alt="vai" style="height: 80%; object-fit: cover" />
          </div>
          <div style="background-color: #818181; text-align: center; border-radius: 10px">
            <h4 class="font-bold text-base">{{ i18n[languageStore.currentLanguage].triceps }}</h4>
            <img src="/images/tay-sau.png" alt="vai" style="height: 80%; object-fit: cover" />
          </div>
        </div>
        <div style="display: flex; justify-content: center">
          <div style="background-color: #818181; text-align: center; border-radius: 10px">
            <h4 class="font-bold text-base">{{ i18n[languageStore.currentLanguage].abs }}</h4>
            <img src="/images/bung.png" alt="vai" style="height: 80%; object-fit: cover" />
          </div>
        </div>
        <div style="display: flex; justify-content: space-between">
          <div style="background-color: #818181; text-align: center; border-radius: 10px">
            <h4 class="font-bold text-base">{{ i18n[languageStore.currentLanguage].biceps }}</h4>
            <img src="/images/tay-truoc.png" alt="vai" style="height: 80%; object-fit: cover" />
          </div>
          <div style="background-color: #818181; text-align: center; border-radius: 10px">
            <h4 class="font-bold text-base">{{ i18n[languageStore.currentLanguage].back }}</h4>
            <img src="/images/lung.png" alt="vai" style="height: 80%; object-fit: cover" />
          </div>
        </div>
      </div>
    </div>

    <div :class="layer1Css">
      <h2 class="font-bold text-lg">{{ i18n[languageStore.currentLanguage].lowerBody }}</h2>
      <div :class="layer2Css">
        <div style="display: flex; justify-content: space-between">
          <div style="background-color: #818181; text-align: center; border-radius: 10px">
            <h4 class="font-bold text-base">{{ i18n[languageStore.currentLanguage].calves }}</h4>
            <img src="/images/bap-chan.png" alt="vai" style="height: 80%; object-fit: cover" />
          </div>
          <div style="background-color: #818181; text-align: center; border-radius: 10px">
            <h4 class="font-bold text-base">{{ i18n[languageStore.currentLanguage].thighs }}</h4>
            <img src="/images/dui.png" alt="vai" style="height: 80%; object-fit: cover" />
          </div>
        </div>
        <div style="display: flex; justify-content: center">
          <div style="background-color: #818181; text-align: center; border-radius: 10px">
            <h4 class="font-bold text-base">{{ i18n[languageStore.currentLanguage].glutes }}</h4>
            <img src="/images/mong.png" alt="vai" style="height: 80%; object-fit: cover" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  width: 430px;
  color: aliceblue;
  padding: 5px;
  overflow: auto;
}

.layer1 {
  background-color: #6e90ad;
  margin: 20px 10px;
  padding: 20px;
  border-radius: 20px;
}

.layer2 {
  background-color: aliceblue;
  padding: 10px;
  border-radius: 20px;
  color: black;
}
</style>
