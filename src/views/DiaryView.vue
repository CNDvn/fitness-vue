<script setup lang="ts">
import IconAdd from '@/components/icons/IconAdd.vue'
import ProgressBar from '@/components/ProgressBar.vue'
import ProgressCycle from '@/components/ProgressCycle.vue'
import TopBar from '@/components/TopBar.vue'
import { ref } from 'vue'

const title = 'Hôm nay'
const meals = [
  {
    id: 1,
    name: 'Bữa Sáng',
    totalCalo: 391,
    totalCaloIn: 135,
    foodNames: ['Bánh bao nhân khoai môn'],
    logo: '/images/cafe.png',
  },
  {
    id: 2,
    name: 'Bữa Trưa',
    totalCalo: 521,
    totalCaloIn: 420,
    foodNames: ['Cơm trắng, thịt heo nạc, thịt kho tau chấm mắm ruốc'],
    logo: '/images/bua-trua.png',
  },
  {
    id: 3,
    name: 'Bữa Tối',
    totalCalo: 326,
    totalCaloIn: 449,
    foodNames: ['Cơm trắng, tôm, bắp, thịt bò'],
    logo: '/images/bua-toi.png',
  },
  {
    id: 4,
    name: 'Bữa Phụ',
    totalCalo: 65,
    totalCaloIn: 227,
    foodNames: ['thanh long, sương sáo, sữa chua'],
    logo: '/images/bua-phu.png',
  },
]

const containerCss = ref('container')
</script>
<template>
  <div :class="containerCss">
    <div>
      <TopBar :title="title" />
    </div>
    <div style="padding: 1.2rem">
      <div class="my-5">
        <div style="display: flex; justify-content: space-between">
          <p>Tóm tắt</p>
          <a style="color: #7bb7e0">Chi tiết</a>
        </div>
        <div style="background-color: #6e90ad; padding: 0.5rem; border-radius: 1rem">
          <div
            style="
              display: flex;
              justify-content: space-around;
              align-items: center;
              align-content: center;
              text-align: center;
            "
          >
            <div>
              <p>1.281</p>
              <p>Đã nạp</p>
            </div>
            <div>
              <ProgressCycle progress="76,100" width="w-32" height="h-32" text="22" />
            </div>
            <div>
              <p>14</p>
              <p>Đốt</p>
            </div>
          </div>
          <div style="display: flex; justify-content: space-between">
            <div style="width: 20%">
              <ProgressBar title="Tinh bột" progress="20" />
            </div>
            <div style="width: 20%">
              <ProgressBar title="Đạm" progress="50" />
            </div>
            <div style="width: 20%">
              <ProgressBar title="Chất Béo" progress="70" />
            </div>
          </div>
        </div>
      </div>
      <div class="my-5">
        <div style="display: flex; justify-content: space-between">
          <p>Dinh Dưỡng</p>
          <a style="color: #7bb7e0">Thêm</a>
        </div>
        <div
          style="
            background-color: #6e90ad;
            padding: 0.5rem;
            border-radius: 1rem;
            overflow: auto;
            height: 50vh;
          "
        >
          <div v-for="meal in meals" :key="meal.id">
            <div style="display: flex">
              <div style="width: 30%">
                <ProgressCycle progress="80,100" width="w-20" height="h-20" :img="meal.logo" />
              </div>
              <div style="width: 60%">
                <div>
                  <h2 class="font-bold">{{ meal.name }}</h2>
                </div>
                <div
                  style="
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
                  "
                >
                  <p>{{ meal.totalCaloIn }}/{{ meal.totalCalo }} kcal</p>
                </div>
                <div
                  style="
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
                  "
                >
                  <p>{{ meal.foodNames.join(',') }}</p>
                </div>
              </div>
              <div style="width: 10%">
                <IconAdd class="icon" style="color: #56dffd" />
              </div>
            </div>
            <div style="display: flex; justify-content: center; margin-bottom: 1rem">
              <div style="background-color: aliceblue; height: 2px; width: 90%"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  color: aliceblue;
  padding: 5px;
}
</style>
