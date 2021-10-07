import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('../views/front/Layout.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('../views/front/Home.vue')
      },
      {
        path: 'page',
        name: 'page',
        component: () => import('../views/front/Page.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
