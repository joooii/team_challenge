import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/3-2',
    name: '3-2',
    component: () => import('../views/3-2.vue')
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
