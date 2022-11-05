import { createRouter, createWebHistory } from 'vue-router';

import Main from '@/views/Main.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }; // always scroll to top
  },
  routes: [
    // {
    //   path: '/:pathMatch(.*)*',
    //   redirect: '/404',
    // },
    // {
    //   path: '/404',
    //   name: '/404',
    //   component: NotFound,
    //   meta: {
    //     auth: false,
    //   },
    // },
    {
      path: '',
      name: 'main',
      component: Main,
      meta: {
        auth: false,
      },
    },
  ],
});
