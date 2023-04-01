import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/btn',
        name: 'btn',
        component: () => import('../views/BtnPage.vue')
    },
    {
        path: '/rating',
        name: 'rating',
        component: () => import('../views/RatingPage.vue')
    }
]

export default createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
