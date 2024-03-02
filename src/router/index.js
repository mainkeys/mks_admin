/*
 * @Author: mainkeys
 * @Date: 2024-02-29 22:34:12
 * @LastEditors: mainkeys dymainkeys@gmail.com
 * @LastEditTime: 2024-03-01 13:03:29
 * @FilePath: \mks_admin\src\router\index.js
 * @Description: router
 */
import {
  createRouter,
  createWebHistory,
  createWebHashHistory
} from 'vue-router'

/**
 * 公开路由表
 */
export const publicRoutes = [
  {
    path: '/login',
    component: () =>
      import(/* webpackChunkName: "login" */ '@/views/login/index.vue')
  }
]

const router = createRouter({
  history:
    process.env.NODE_ENV === 'production'
      ? createWebHistory()
      : createWebHashHistory(),
  routes: publicRoutes
})

export default router
