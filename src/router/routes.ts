import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/register',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/RegisterPage.vue'),
        meta: {
          requiresAuth: false
        }
      }
    ],
  },
  {
    path: '/register-proceed',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/RegisterProceedPage.vue'),
        meta: {
          requiresAuth: false
        }
      }
    ],
  },
  {
    path: '/login',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/LoginPage.vue'),
        meta: {
          requiresAuth: false
        }
      }
    ],
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue'),
        meta: {
          requiresAuth: true
        }
      }
    ],
  },
  {
    path: '/promotions',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/promotion/PromotionsPage.vue'),
        children: [
          {
            path: 'bonuses',
            component: () => import('pages/promotion/components/BonusesTab.vue'),
          },
          {
            path: 'promotions',
            component: () => import('pages/promotion/components/PromotionsTab.vue'),
          },
          {
            path: 'collaborations',
            component: () => import('pages/promotion/components/CollaborationsTab.vue'),
          }
        ],
        meta: {
          requiresAuth: true
        }
      }
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
