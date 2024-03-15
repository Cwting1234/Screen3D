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
        path: '/caseIndex', 
        name:'case',
        component: () =>import('@/view/case') 
    },
    {
        path: '/caseCk', 
        name:'ck',
        component: () =>import('@/view/case/ck') 
    },
    {
        path: '/caseLc', 
        name:'lc',
        component: () =>import('@/view/case/lc') 
    },
];


const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;