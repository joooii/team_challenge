import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    redirect: '/login'
  },
  {
    path: '/main',
    name: 'home',
    component: HomeView
  },
  {
    path: '/MyPage',
    name: 'MyPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MyPage.vue')
  },
  {
    path: '/3-0',
    name: '3-0',
    component: () => import('../views/3-0.vue')
  },
  {
    path: '/4-0',
    name: '4-0',
    component: () => import('../views/4-0.vue')
  },
  {
    path: '/5-0',
    name: '5-0',
    component: () => import('../views/5-0.vue')
  },
  {
    path: '/6-0',
    name: '6-0',
    component: () => import('../views/6-0.vue')
  },
  {
    path: '/3-2',
    name: '3-2',
    component: () => import('../views/3-2.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/3-1',
    name: '3-1',
    component: () => import('../views/3-1.vue')
  },
  {
    path: '/WriteReview',
    name: 'WriteReview',
    component: () => import('../views/WriteReview.vue')
  },
  {
    path: '/MyReview',
    name: 'MyReview',
    component: () => import('../views/MyReview.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
