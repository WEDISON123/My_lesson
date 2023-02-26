import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            component: () => import('../views/Home/index.vue')
        },
        {
            path: '/vedio/:id',
            component: () => import('../views/Veideo/index.vue')
        },
        {
            path: '/login',
            component: () => import('../views/Login/index.vue')
        },
        {
            path: '/search',
            component: () => import('../views/Search/index.vue')
        }
    ]
})

export default router