import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DiaryView from '../views/DiaryView.vue'
import WorkoutView from '../views/WorkoutView.vue'
import MealView from '../views/MealView.vue'
import MeView from '../views/MeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/diary',
      name: 'diary',
      component: DiaryView,
    },
    {
      path: '/workout',
      name: 'workout',
      component: WorkoutView,
    },
    {
      path: '/meal',
      name: 'meal',
      component: MealView,
    },
    {
      path: '/me',
      name: 'me',
      component: MeView,
    },
  ],
})

export default router
