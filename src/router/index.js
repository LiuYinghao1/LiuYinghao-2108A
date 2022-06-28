import { createRouter, createWebHashHistory } from 'vue-router'

// 公有路由表
const publicRoutes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/login/index')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/layer/home')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
