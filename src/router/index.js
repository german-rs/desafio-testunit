import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { 
      title: 'Home | Test unitarios con Vitest' 
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: { 
      title: 'About | Test unitarios con Vitest' 
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
    meta: { 
      title: 'Contact | Test unitarios con Vitest' 
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// Guardar global para cambiar el título de la página
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Test unitarios con Vitest';
  next();
})

export default router