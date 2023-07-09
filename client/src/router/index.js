import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BusinessRegister from '../views/BusinessRegister.vue'
import AiRegister from '../views/AiRegister.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/business',
      name: 'business',
      component: BusinessRegister
    },
    {
      path: '/ai',
      name: 'ai',
      component: AiRegister
    },
  ]
})

export default router
