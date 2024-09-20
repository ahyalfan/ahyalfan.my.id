import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PortofolioView from '@/views/PortofolioView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/guest-note',
      name: 'guest-note',
      component: () => import('../views/GuestNote.vue'),
    },
    {
      path: '/portofolio',
      name: 'portofolio',
      component: () => import('../views/PortofolioView.vue'),
      // component: PortofolioView,
    },
    {
      path: '/service',
      name: 'service',
      component: () => import('../views/ServiceView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/NotfoundView.vue'),
    }, // Rute 404
  ],
});

export default router;
