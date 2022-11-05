import { createRouter, createWebHistory } from 'vue-router';

import Main from '@/views/Main.vue'
import SeonamriInfo from '@/views/SeonamriInfo.vue'
import Menu from '@/views/Menu.vue';
import Store from '@/views/Store.vue';
import Franchise from '@/views/Franchise.vue';

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
    {
      path: '/about',
      name: 'about',
      component: SeonamriInfo,
      meta: {
        auth: false,
      },
    },
    {
      path: '/store',
      name: 'store',
      component: Store,
      meta: {
        auth: false,
      },
    },
    {
      path: '/franchise',
      name: 'franchise',
      component: Franchise,
      meta: {
        auth: false,
      },
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu,
      meta: {
        auth: false,
      },
    },
  ],
});
