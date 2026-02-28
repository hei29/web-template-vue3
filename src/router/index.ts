import {
  createRouter,
  createMemoryHistory,
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
  history: createMemoryHistory(),
  routes: allRoutes,
});

export default router;
