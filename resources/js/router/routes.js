
const routes = [
    {
        path: '/',
        component: () => import('../pages/index.vue'),
        name: 'index',
    },
    {
        path: '/dashboard',
        component: () => import('../pages/dashboard.vue'),
        name: 'dashboard',
    },
]

export default routes;
