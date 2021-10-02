import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('../views/front/Layout.vue'),
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('../views/front/Home.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
