import { createRouter, createWebHistory } from 'vue-router';
const routes = [
    {
        path: '/',
        redirect: '/index'
    },
    //首页
    { 
        path: '/index', 
        name:'home',
        component: () =>import('@/view/home') 
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;