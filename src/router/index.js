import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Hame',
    component: () => import('../pages/index.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../pages/about.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;