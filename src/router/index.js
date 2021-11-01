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
      // 我非預期懷孕了
      {
        path: 'unintended-2',
        name: 'unintended-2',
        component: () => import('../views/secondStage/Unintended-2.vue')
      },
      {
        path: 'unintended-3',
        name: 'unintended-3',
        component: () => import('../views/thirdStage/Unintended-3.vue')
      },
      {
        path: 'unintended-4-1',
        name: 'unintended-4-1',
        component: () => import('../views/fourthStage/Unintended-4-1.vue')
      },
      // 我女兒懷孕了
      {
        path: 'daughter-2',
        name: 'daughter-2',
        component: () => import('../views/secondStage/Daughter-2.vue')
      },
      {
        path: 'daughter-3-1',
        name: 'daughter-3-1',
        component: () => import('../views/thirdStage/Daughter-3-1.vue')
      },
      // 我女友懷孕了
      {
        path: 'youngdad-2',
        name: 'youngdad-2',
        component: () => import('../views/secondStage/Youngdad-2.vue')
      },
      // 我是親友
      {
        path: 'family-2',
        name: 'family-2',
        component: () => import('../views/secondStage/Family-2.vue')
      },
      // 我想支持
      {
        path: 'support-2',
        name: 'support-2',
        component: () => import('../views/secondStage/Support-2.vue')
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
        path: 'forget',
        name: 'forget',
        component: () => import('../views/login/ForgetPassword.vue')
      }
    ]
  },
  {
    path: '/backed',
    name: 'backed',
    component: () => import('../views/backed/BackedLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '/backed',
        name: 'personal',
        component: () => import('../views/backed/Personal.vue')
      },
      {
        path: '/course',
        name: 'course',
        component: () => import('../views/backed/Course.vue')
      },
      {
        path: '/chatonline',
        name: 'chatonline',
        component: () => import('../views/backed/ChatOnline.vue')
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
