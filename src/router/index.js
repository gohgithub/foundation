import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: '登入介面',
    component: () => import('../views/Login')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
