import { createRouter, createMemoryHistory } from "vue-router";

const defaultRouterList = [
    {}
];

export const allRoutes = [...defaultRouterList];

const router = createRouter({
    history: createMemoryHistory('/jm'),
    routes: allRoutes,
})

export default router;