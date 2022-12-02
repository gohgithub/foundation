/* eslint-disable */
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/:catchAll(.*)',
    redirect: '/'
  },
  {
    path: '/test',
    component: () => import('../views/front/Test.vue'),
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
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/secondStage/About.vue')
      },
      {
        path: 'maintain',
        name: 'maintain',
        component: () => import('../components/Maintain.vue')
      },
      // 我非預期懷孕了
      {
        path: 'unintended-2',
        name: 'unintended-2',
        component: () => import('../views/secondStage/Unintended-2.vue')
      },
      {
        path: 'talking-3',
        name: 'talking-3',
        component: () => import('../views/thirdStage/Talking-3.vue')
      },
      {
        path: 'talking-3-1',
        name: 'talking-3-1',
        component: () => import('../views/thirdStage/Talking-3-1.vue')
      },
      {
        path: 'talking-3-1-1',
        name: 'talking-3-1-1',
        component: () => import('../views/thirdStage/Talking-3-1-1.vue')
      },
      {
        path: 'unintended-3-1',
        name: 'unintended-3-1',
        component: () => import('../views/thirdStage/Unintended-3-1.vue')
      },
      {
        path: 'unintended-3-1-1',
        name: 'unintended-3-1-1',
        component: () => import('../views/thirdStage/Unintended-3-1-1.vue')
      },
      {
        path: 'unintended-3-1-2',
        name: 'unintended-3-1-2',
        component: () => import('../views/thirdStage/Unintended-3-1-2.vue')
      },
      {
        path: 'unintended-3-2',
        name: 'unintended-3-2',
        component: () => import('../views/thirdStage/Unintended-3-2.vue')
      },
      {
        path: 'unintended-3-2-1',
        name: 'unintended-3-2-1',
        component: () => import('../views/thirdStage/Unintended-3-2-1.vue')
      },
      {
        path: 'unintended-3-2-2',
        name: 'unintended-3-2-2',
        component: () => import('../views/thirdStage/Unintended-3-2-2.vue')
      },
      {
        path: 'unintended-3-3',
        name: 'unintended-3-3',
        component: () => import('../views/thirdStage/Unintended-3-3.vue')
      },
      {
        path: 'medical-3-1',
        name: 'medical-3-1',
        component: () => import('../views/thirdStage/Medical-3-1.vue')
      },
      {
        path: 'medical-3-1-1',
        name: 'medical-3-1-1',
        component: () => import('../views/thirdStage/Medical-3-1-1.vue')
      },
      {
        path: 'medical-3-2',
        name: 'medical-3-2',
        component: () => import('../views/thirdStage/Medical-3-2.vue')
      },
      {
        path: 'medical-3-2-1',
        name: 'medical-3-2-1',
        component: () => import('../views/thirdStage/Medical-3-2-1.vue')
      },
      {
        path: 'act-3-1',
        name: 'act-3-1',
        component: () => import('../views/thirdStage/Act-3-1.vue')
      },
      {
        path: 'act-3-1-1',
        name: 'act-3-1-1',
        component: () => import('../views/thirdStage/Act-3-1-1.vue')
      },
      {
        path: 'act-3-1-2',
        name: 'act-3-1-2',
        component: () => import('../views/thirdStage/Act-3-1-2.vue')
      },
      {
        path: 'familyRelation-3-1',
        name: 'familyRelation-3-1',
        component: () => import('../views/thirdStage/FamilyRelation-3-1.vue')
      },
      {
        path: 'familyRelation-3-2',
        name: 'familyRelation-3-2',
        component: () => import('../views/thirdStage/FamilyRelation-3-2.vue')
      },
      {
        path: 'familyRelation-3-1-1',
        name: 'familyRelation-3-1-1',
        component: () => import('../views/thirdStage/FamilyRelation-3-1-1.vue')
      },
      {
        path: 'intimacy-3-1',
        name: 'intimacy-3-1',
        component: () => import('../views/thirdStage/Intimacy-3-1.vue')
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
        path: 'medical-4-1',
        name: 'medical-4-1',
        component: () => import('../views/fourthStage/Medical-4-1.vue')
      },
      {
        path: 'medical-4-2',
        name: 'medical-4-2',
        component: () => import('../views/fourthStage/Medical-4-2.vue')
      },
      {
        path: 'medical-4-3',
        name: 'medical-4-3',
        component: () => import('../views/fourthStage/Medical-4-3.vue')
      },
      {
        path: 'medical-4-4',
        name: 'medical-4-4',
        component: () => import('../views/fourthStage/Medical-4-4.vue')
      },
      {
        path: 'medical-4-5',
        name: 'medical-4-5',
        component: () => import('../views/fourthStage/Medical-4-5.vue')
      },
      {
        path: 'medical-4-6',
        name: 'medical-4-6',
        component: () => import('../views/fourthStage/Medical-4-6.vue')
      },
      {
        path: 'medical-4-6-1',
        name: 'medical-4-6-1',
        component: () => import('../views/fourthStage/Medical-4-6-1.vue')
      },
      {
        path: 'medical-4-7',
        name: 'medical-4-7',
        component: () => import('../views/fourthStage/Medical-4-7.vue')
      },
      {
        path: 'medical-4-8',
        name: 'medical-4-8',
        component: () => import('../views/fourthStage/Medical-4-8.vue')
      },
      {
        path: 'medical-4-9',
        name: 'medical-4-9',
        component: () => import('../views/fourthStage/Medical-4-9.vue')
      },
      {
        path: 'medical-4-10',
        name: 'medical-4-10',
        component: () => import('../views/fourthStage/Medical-4-10.vue')
      },
      {
        path: 'medical-4-11',
        name: 'medical-4-11',
        component: () => import('../views/fourthStage/Medical-4-11.vue')
      },
      {
        path: 'act-4-1',
        name: 'act-4-1',
        component: () => import('../views/fourthStage/Act-4-1.vue')
      },
      {
        path: 'act-4-1-1',
        name: 'act-4-1-1',
        component: () => import('../views/fourthStage/Act-4-1-1.vue')
      },
      {
        path: 'act-4-2',
        name: 'act-4-2',
        component: () => import('../views/fourthStage/Act-4-2.vue')
      },
      {
        path: 'act-4-2-1',
        name: 'act-4-2-1',
        component: () => import('../views/fourthStage/Act-4-2-1.vue')
      },
      {
        path: 'act-4-3',
        name: 'act-4-3',
        component: () => import('../views/fourthStage/Act-4-3.vue')
      },
      {
        path: 'act-4-3-1',
        name: 'act-4-3-1',
        component: () => import('../views/fourthStage/Act-4-3-1.vue')
      },
      {
        path: '',
        name: 'act-4-3-2',
        component: () => import('../views/fourthStage/Act-4-3-2.vue')
      },
      {
        path: 'act-4-3-3',
        name: 'act-4-3-3',
        component: () => import('../views/fourthStage/Act-4-3-3.vue')
      },
      {
        path: 'act-4-4',
        name: 'act-4-4',
        component: () => import('../views/fourthStage/Act-4-4.vue')
      },
      {
        path: 'act-4-5',
        name: 'act-4-5',
        component: () => import('../views/fourthStage/Act-4-5.vue')
      },
      {
        path: 'mentalCare-4-1',
        name: 'mentalCare-4-1',
        component: () => import('../views/fourthStage/MentalCare-4-1.vue')
      },
      {
        path: 'mentalCare-4-1-1',
        name: 'mentalCare-4-1-1',
        component: () => import('../views/fourthStage/MentalCare-4-1-1.vue')
      },
      {
        path: 'mentalCare-4-2',
        name: 'mentalCare-4-2',
        component: () => import('../views/fourthStage/MentalCare-4-2.vue')
      },
      {
        path: 'mentalCare-4-3',
        name: 'mentalCare-4-3',
      component: () => import('../views/fourthStage/MentalCare-4-3.vue')
      },
      {
        path: 'mentalCare-4-3-1',
        name: 'mentalCare-4-3-1',
      component: () => import('../views/fourthStage/MentalCare-4-3-1.vue')
      },
      {
        path: 'familyRelation-4-1',
        name: 'familyRelation-4-1',
        component: () => import('../views/fourthStage/FamilyRelation-4-1.vue')
      },
      {
        path: 'familyRelation-4-2',
        name: 'familyRelation-4-2',
        component: () => import('../views/fourthStage/FamilyRelation-4-2.vue')
      },
      {
        path: 'familyRelation-4-2-1',
        name: 'familyRelation-4-2-1',
        component: () => import('../views/fourthStage/FamilyRelation-4-2-1.vue')
      },
      {
        path: 'familyRelation-4-2-2',
        name: 'familyRelation-4-2-2',
        component: () => import('../views/fourthStage/FamilyRelation-4-2-2.vue')
      },
      {
        path: 'familyRelation-4-3',
        name: 'familyRelation-4-3',
        component: () => import('../views/fourthStage/FamilyRelation-4-3.vue')
      },
      {
        path: 'familyRelation-4-4',
        name: 'familyRelation-4-4',
        component: () => import('../views/fourthStage/FamilyRelation-4-4.vue')
      },
      {
        path: 'familyRelation-4-5',
        name: 'familyRelation-4-5',
        component: () => import('../views/fourthStage/FamilyRelation-4-5.vue')
      },
      {
        path: 'familyRelation-4-6',
        name: 'familyRelation-4-6',
        component: () => import('../views/fourthStage/FamilyRelation-4-6.vue')
      },
      {
        path: 'familyRelation-4-7',
        name: 'familyRelation-4-7',
        component: () => import('../views/fourthStage/FamilyRelation-4-7.vue')
      },
      {
        path: 'heartTohearts-4-1',
        name: 'heartTohearts-4-1',
        component: () => import('../views/fourthStage/HeartTohearts-4-1.vue')
      },
      // 男友版
      {
        path: 'heartTohearts-4-1-1',
        name: 'heartTohearts-4-1-1',
        component: () => import('../views/fourthStage/HeartTohearts-4-1-1.vue')
      },
      {
        path: 'parenting-4-1',
        name: 'parenting-4-1',
        component: () => import('../views/fourthStage/Parenting-4-1.vue')
      },
      {
        path: 'parenting-4-2',
        name: 'parenting-4-2',
        component: () => import('../views/fourthStage/Parenting-4-2.vue')
      },
      {
        path: 'study-4-1',
        name: 'study-4-1',
        component: () => import('../views/fourthStage/Study-4-1.vue')
      },
      {
        path: 'study-4-1-1',
        name: 'study-4-1-1',
        component: () => import('../views/fourthStage/Study-4-1-1.vue')
      },
      {
        path: 'study-4-2',
        name: 'study-4-2',
        component: () => import('../views/fourthStage/Study-4-2.vue')
      },
      {
        path: 'economy-4-1',
        name: 'economy-4-1',
        component: () => import('../views/fourthStage/Economy-4-1.vue')
      },
      {
        path: 'economy-4-1-1',
        name: 'economy-4-1-1',
        component: () => import('../views/fourthStage/Economy-4-1-1.vue')
      },
      {
        path: 'economy-4-1-2',
        name: 'economy-4-1-2',
        component: () => import('../views/fourthStage/Economy-4-1-2.vue')
      },
      {
        path: 'economy-4-2',
        name: 'economy-4-2',
        component: () => import('../views/fourthStage/Economy-4-2.vue')
      },
      {
        path: 'intimacy-4-1',
        name: 'intimacy-4-1',
        component: () => import('../views/fourthStage/Intimacy-4-1.vue')
      },
      {
        path: 'intimacy-4-2',
        name: 'intimacy-4-2',
        component: () => import('../views/fourthStage/Intimacy-4-2.vue')
      },
      {
        path: 'intimacy-4-3',
        name: 'intimacy-4-3',
        component: () => import('../views/fourthStage/Intimacy-4-3.vue')
      },
      {
        path: 'intimacy-4-4',
        name: 'intimacy-4-4',
        component: () => import('../views/fourthStage/Intimacy-4-4.vue')
      },
      {
        path: 'intimacy-4-5',
        name: 'intimacy-4-5',
        component: () => import('../views/fourthStage/Intimacy-4-5.vue')
      },
      {
        path: 'talking-4-1',
        name: 'talking-4-1',
        component: () => import('../views/fourthStage/Talking-4-1.vue')
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
        path: 'unintended-5-8',
        name: 'unintended-5-8',
        component: () => import('../views/fifthStage/Unintended-5-8.vue')
      },
      {
        path: 'familyRelation-5-1',
        name: 'familyRelation-5-1',
        component: () => import('../views/fifthStage/FamilyRelation-5-1.vue')
      },
      {
        path: 'study-5-1',
        name: 'study-5-1',
        component: () => import('../views/fifthStage/Study-5-1.vue')
      },
      {
        path: 'familyRelation-5-2',
        name: 'familyRelation-5-2',
        component: () => import('../views/fifthStage/FamilyRelation-5-2.vue')
      },
      {
        path: 'familyRelation-5-3',
        name: 'familyRelation-5-3',
        component: () => import('../views/fifthStage/FamilyRelation-5-3.vue')
      },
      {
        path: 'familyRelation-5-4',
        name: 'familyRelation-5-4',
        component: () => import('../views/fifthStage/FamilyRelation-5-4.vue')
      },
      {
        path: 'familyRelation-5-5',
        name: 'familyRelation-5-5',
        component: () => import('../views/fifthStage/FamilyRelation-5-5.vue')
      },
      {
        path: 'heartTohearts-5-1',
        name: 'heartTohearts-5-1',
        component: () => import('../views/fifthStage/HeartTohearts-5-1.vue')
      },
      {
        path: 'mentalCare-5-1',
        name: 'mentalCare-5-1',
        component: () => import('../views/fifthStage/MentalCare-5-1.vue')
      },
      {
        path: 'mentalCare-5-2',
        name: 'mentalCare-5-2',
        component: () => import('../views/fifthStage/MentalCare-5-2.vue')
      },
      {
        path: 'mentalCare-5-3',
        name: 'mentalCare-5-3',
        component: () => import('../views/fifthStage/MentalCare-5-3.vue')
      },
      {
        path: 'mentalCare-5-4',
        name: 'mentalCare-5-4',
        component: () => import('../views/fifthStage/MentalCare-5-4.vue')
      },
      {
        path: 'act-5-1',
        name: 'act-5-1',
        component: () => import('../views/fifthStage/Act-5-1.vue')
      },
      {
        path: 'act-5-1-1',
        name: 'act-5-1-1',
        component: () => import('../views/fifthStage/Act-5-1-1.vue')
      },
      {
        path: 'act-5-2',
        name: 'act-5-2',
        component: () => import('../views/fifthStage/Act-5-2.vue')
      },
      {
        path: 'act-5-3',
        name: 'act-5-3',
        component: () => import('../views/fifthStage/Act-5-3.vue')
      },
      {
        path: 'act-5-4',
        name: 'act-5-4',
        component: () => import('../views/fifthStage/Act-5-4.vue')
      },
      {
        path: 'act-5-5',
        name: 'act-5-5',
        component: () => import('../views/fifthStage/Act-5-5.vue')
      },
      {
        path: 'parenting-5-1',
        name: 'parenting-5-1',
        component: () => import('../views/fifthStage/Parenting-5-1.vue')
      },
      {
        path: 'parenting-5-2',
        name: 'parenting-5-2',
        component: () => import('../views/fifthStage/Parenting-5-2.vue')
      },
      {
        path: 'parenting-5-3',
        name: 'parenting-5-3',
        component: () => import('../views/fifthStage/Parenting-5-3.vue')
      },
      {
        path: 'economy-5-1',
        name: 'economy-5-1',
        component: () => import('../views/fifthStage/Economy-5-1.vue')
      },
      {
        path: 'economy-5-2',
        name: 'economy-5-2',
        component: () => import('../views/fifthStage/Economy-5-2.vue')
      },
      {
        path: 'economy-5-3',
        name: 'economy-5-3',
        component: () => import('../views/fifthStage/Economy-5-3.vue')
      },
      {
        path: 'medical-5-1',
        name: 'medical-5-1',
        component: () => import('../views/fifthStage/Medical-5-1.vue')
      },
      {
        path: 'medical-5-2',
        name: 'medical-5-2',
        component: () => import('../views/fifthStage/Medical-5-2.vue')
      },
      {
        path: 'medical-5-3',
        name: 'medical-5-3',
        component: () => import('../views/fifthStage/Medical-5-3.vue')
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
      {
        path: 'unintended-6-4',
        name: 'unintended-6-4',
        component: () => import('../views/sixthStage/Unintended-6-4.vue')
      },
      {
        path: 'unintended-6-1-1',
        name: 'unintended-6-1-1',
        component: () => import('../views/sixthStage/Unintended-6-1-1.vue')
      },
      {
        path: 'unintended-6-2-1',
        name: 'unintended-6-2-1',
        component: () => import('../views/sixthStage/Unintended-6-2-1.vue')
      },
      {
        path: 'unintended-6-3-1',
        name: 'unintended-6-3-1',
        component: () => import('../views/sixthStage/Unintended-6-3-1.vue')
      },
      {
        path: 'unintended-6-4-1',
        name: 'unintended-6-4-1',
        component: () => import('../views/sixthStage/Unintended-6-4-1.vue')
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
      {
        path: 'youngdad-3-1',
        name: 'youngdad-3-1',
        component: () => import('../views/thirdStage/Youngdad-3-1.vue')
      },
      {
        path: 'youngdad-3-2',
        name: 'youngdad-3-2',
        component: () => import('../views/thirdStage/Youngdad-3-2.vue')
      },
      {
        path: 'youngdad-3-3',
        name: 'youngdad-3-3',
        component: () => import('../views/thirdStage/Youngdad-3-3.vue')
      },
      {
        path: 'youngdad-3-4',
        name: 'youngdad-3-4',
        component: () => import('../views/thirdStage/Youngdad-3-4.vue')
      },
      {
        path: 'youngdad-4-1',
        name: 'youngdad-4-1',
        component: () => import('../views/fourthStage/Youngdad-4-1.vue')
      },
      {
        path: 'youngdad-4-2',
        name: 'youngdad-4-2',
        component: () => import('../views/fourthStage/Youngdad-4-2.vue')
      },
      // 我是親友
      {
        path: 'family-2',
        name: 'family-2',
        component: () => import('../views/secondStage/Family-2.vue')
      },
      {
        path: 'family-3-1',
        name: 'family-3-1',
        component: () => import('../views/thirdStage/Family-3-1.vue')
      },
      {
        path: 'family-3-2',
        name: 'family-3-2',
        component: () => import('../views/thirdStage/Family-3-2.vue')
      },
      // 我想支持
      {
        path: 'support-2',
        name: 'support-2',
        component: () => import('../views/secondStage/Support-2.vue')
      },
      {
        path: 'support-3-1',
        name: 'support-3-1',
        component: () => import('../views/thirdStage/Support-3-1.vue')
      },
      {
        path: 'support-3-2',
        name: 'support-3-2',
        component: () => import('../views/thirdStage/Support-3-2.vue')
      },
      {
        path: 'support-3-3',
        name: 'support-3-3',
        component: () => import('../views/thirdStage/Support-3-3.vue')
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
      },
      {
        path: '/changePassword',
        name: 'changePassword',
        component: () => import('../views/backed/ChangePassword.vue')
      },
      {
        path: '/question',
        name: 'question',
        component: () => import('../views/backed/Question.vue')
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
