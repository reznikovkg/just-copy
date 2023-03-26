import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/btn',
    name: 'btn',
    component: () => import(/* webpackChunkName: "btn" */ '../views/BtnPage.vue')
  },
  {
    path: '/exp',
    name: 'exp',
    component: () => import(/* webpackChunkName: "btn" */ '../views/ExpressPage.vue')
  },
  {
    path: '/checkbox',
    name: 'CheckBox',
    component: () => import(/* webpackChunkName: "select" */ '../views/CheckBoxView.vue')
  },
  {
    path: '/select',
    name: 'select',
    component: () => import(/* webpackChunkName: "select" */ '../views/SelectPage.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router