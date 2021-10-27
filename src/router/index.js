import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/:catchAll(.*)',
    redirect: '/'
  },
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
      },
      {
        path: 'select',
        name: 'select',
        component: () => import('../views/secondStage/UnintendedSelect.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/LoginLayout.vue'),
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import('../views/login/Login.vue')
      },
      {
        path: '/forget',
        name: 'forget',
        component: () => import('../views/login/ForgetPassword.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return {
      top: 0
    }
  }
})

export default router
