import { createRouter, createWebHistory } from 'vue-router';
const routes = [
    {
        path: "/",
        redirect: "/index",
      },
  
    //首页
    { 
        path: '/index', 
        name:'home',
        component: () =>import('@/view/home') 
    },
    {
        path: '/case', 
        name:'case',
        component: () =>import('@/view/case') 
    },
    {
        path: '/ck', 
        name:'ck',
        component: () =>import('@/view/ck') 
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;