/*
 * @Author: mainkeys
 * @Date: 2024-01-20 15:23:19
 * @LastEditors: mainkeys dymainkeys@gmail.com
 * @LastEditTime: 2024-02-25 17:27:16
 * @FilePath: \mks_admin\src\router\index.js
 * @Description: router
 */

import {
  createRouter,
  createWebHistory,
  createWebHashHistory
} from 'vue-router'

import layout from '@/layout/index.vue'

/**
 * 公开路由表
 */
const publicRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/',
    component: layout,
    redirect: '/profile',
    // children: [
    //   {
    //     path: '/profile',
    //     name: 'profile',
    //     component: () =>
    //       import(/* webpackChunkName: "profile" */ '@/views/profile/index'),
    //     meta: {
    //       title: 'profile',
    //       icon: 'personnel'
    //     }
    //   },
    //   {
    //     path: '/chart',
    //     name: 'chart',
    //     component: () =>
    //       import(/* webpackChunkName: "chart" */ '@/views/chart/index'),
    //     meta: {
    //       title: 'chart',
    //       icon: 'chart'
    //     }
    //   },
    //   {
    //     path: '/404',
    //     name: '404',
    //     component: () =>
    //       import(/* webpackChunkName: "error-page" */ '@/views/error-page/404')
    //   },
    //   {
    //     path: '/401',
    //     name: '401',
    //     component: () =>
    //       import(/* webpackChunkName: "error-page" */ '@/views/error-page/401')
    //   }
    // ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router