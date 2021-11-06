/* eslint-disable */
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
        path: 'chat',
        name: 'chat',
        component: () => import('../views/front/Chat.vue')
      },
      // 我非預期懷孕了
      {
        path: 'unintended-2',
        name: 'unintended-2',
        component: () => import('../views/secondStage/Unintended-2.vue')
      },
      {
        path: 'unintended-3-1',
        name: 'unintended-3-1',
        component: () => import('../views/thirdStage/Unintended-3-1.vue')
      },
      {
        path: 'unintended-3-2',
        name: 'unintended-3-2',
        component: () => import('../views/thirdStage/Unintended-3-2.vue')
      },
      {
        path: 'unintended-4-1',
        name: 'unintended-4-1',
        component: () => import('../views/fourthStage/Unintended-4-1.vue')
      },
      {
        path: 'unintended-4-2',
        name: 'unintended-4-2',
        component: () => import('../views/fourthStage/Unintended-4-2.vue')
      },
      {
        path: 'unintended-4-3',
        name: 'unintended-4-3',
        component: () => import('../views/fourthStage/Unintended-4-3.vue')
      },
      {
        path: 'unintended-5-1',
        name: 'unintended-5-1',
        component: () => import('../views/fifthStage/Unintended-5-1.vue')
      },
      {
        path: 'unintended-5-2',
        name: 'unintended-5-2',
        component: () => import('../views/fifthStage/Unintended-5-2.vue')
      },
      {
        path: 'unintended-5-3',
        name: 'unintended-5-3',
        component: () => import('../views/fifthStage/Unintended-5-3.vue')
      },
      {
        path: 'unintended-5-4',
        name: 'unintended-5-4',
        component: () => import('../views/fifthStage/Unintended-5-4.vue')
      },
      {
        path: 'unintended-5-5',
        name: 'unintended-5-5',
        component: () => import('../views/fifthStage/Unintended-5-5.vue')
      },
      {
        path: 'unintended-5-6',
        name: 'unintended-5-6',
        component: () => import('../views/fifthStage/Unintended-5-6.vue')
      },
      {
        path: 'unintended-5-7',
        name: 'unintended-5-7',
        component: () => import('../views/fifthStage/Unintended-5-7.vue')
      },
      {
        path: 'unintended-6-1',
        name: 'unintended-6-1',
        component: () => import('../views/sixthStage/Unintended-6-1.vue')
      },
      {
        path: 'unintended-6-2',
        name: 'unintended-6-2',
        component: () => import('../views/sixthStage/Unintended-6-2.vue')
      },
      {
        path: 'unintended-6-3',
        name: 'unintended-6-3',
        component: () => import('../views/sixthStage/Unintended-6-3.vue')
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
      {
        path: 'daughter-3-2',
        name: 'daughter-3-2',
        component: () => import('../views/thirdStage/Daughter-3-2.vue')
      },
      {
        path: 'daughter-3-3',
        name: 'daughter-3-3',
        component: () => import('../views/thirdStage/Daughter-3-3.vue')
      },
      {
        path: 'daughter-3-4',
        name: 'daughter-3-4',
        component: () => import('../views/thirdStage/Daughter-3-4.vue')
      },
      {
        path: 'daughter-3-5',
        name: 'daughter-3-5',
        component: () => import('../views/thirdStage/Daughter-3-5.vue')
      },
      {
        path: 'daughter-3-6',
        name: 'daughter-3-6',
        component: () => import('../views/thirdStage/Daughter-3-6.vue')
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
