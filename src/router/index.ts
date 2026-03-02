import {
  createRouter,
  // createMemoryHistory,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

const defaultRouterList: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: '/home',
    component: () => import('@/pages/home/index.vue')
  }
];

export const allRoutes = [...defaultRouterList];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL || '/jm'),
  routes: allRoutes,
});

export default router;
