
const routerArray = [
    {
        path: '/login',
        component: () => import('@/pages/login/index.vue'),
        meta: {
            title: '登录',
            requiresAuth: false,
        }
    }
];

export default routerArray;