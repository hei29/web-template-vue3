import {
  createRouter,
  // createMemoryHistory,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

// 自动导入modules文件夹下所有ts文件
const modules: any = import.meta.glob(['./modules/**/*.ts', './modules/**/*.tsx'], { eager: true });

// 路由暂存
const routeModuleList: Array<RouteRecordRaw> = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

// 关于单层路由，meta 中设置 { single: true } 即可为单层路由，{ hidden: true } 即可在侧边栏隐藏该路由

// 存放动态路由
export const asyncRouterList: Array<RouteRecordRaw> = [...routeModuleList];

const defaultRouterList: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: '/home',
    component: () => import('@/pages/home/index.vue'),
    meta: {
      title: '首页',
      requiresAuth: true,
    }
  }
];

export const allRoutes = [...defaultRouterList, ...asyncRouterList];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL || '/jm'),
  routes: allRoutes,
});

router.beforeEach((to, from) => {
  // 在这里可以添加全局的路由守卫逻辑，例如是否登录、权限验证等
  // 例如：
  // const isLoggedIn = checkLoginStatus();
  // if (to.meta.requiresAuth && !isLoggedIn) {
  //   next('/login');
  // } else {
  //   next();
  // }
  // next();
  if(to.path === '/login') {
    return true;
  }
  return '/login';
});

export default router;
