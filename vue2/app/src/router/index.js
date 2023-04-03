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
    name: 'checkbox',
    component: () => import(/* webpackChunkName: "checkbox" */ '../views/CheckBoxPage.vue')
  },
  {
    path: '/select',
    name: 'select',
    component: () => import(/* webpackChunkName: "select" */ '../views/SelectPage.vue')
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: () => import(/* webpackChunkName: "select" */ '../views/NotificationPage.vue')
  },
  {
    path: '/modal',
    name: 'modal',
    component: () => import(/* webpackChunkName: "select" */ '../views/ModalPage/ModalPage.vue')
  },
  {
    path: '/progress',
    name: 'progress',
    component: () => import(/* webpackChunkName: "progress" */ '../views/ProgressPage.vue')
  },
  {
    path: '/Tabs',
    name: 'tabs',
    component: () => import(/* webpackChunkName: "select" */ '../views/TabsPage.vue')
  },
  {
    path: '/modal2',
    name: 'modal2',
    component: () => import(/* webpackChunkName: "modal2" */ '../views/ModalPage.vue')
  },
  {
    path: '/loader',
    name: 'loader',
    component: () => import(/* webpackChunkName: "loader" */ '../views/LoaderPage.vue')
  },
  {
    path: '/progress-an',
    name: 'progressAn',
    component: () => import(/* webpackChunkName: "loader" */ '../views/ProgressAnPage.vue')
  },
  {
    path: '/accordion',
    name: 'accordion',
    component: () => import(/* webpackChunkName: "accordion" */ '../views/AccordionPage.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
