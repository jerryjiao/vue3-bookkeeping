import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Record from '../views/Record.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/record',
      name: 'record',
      component: Record
    }
  ]
})

export default router
