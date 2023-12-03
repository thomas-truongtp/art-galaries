import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: () => import('../views/HomeView.vue')
    },
    {
      path: "/products/:productId",
      name: "Product",
      component: () => import('../views/ProductView.vue'),
      meta:{
      requiresAuth: true
      }
    },
    {
      path: "/login",
      name: "Login",
      component: () => import('../views/LoginView.vue')
    },
  ]
})

export default router
