import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/application',
    name: 'Application',
    component: () => import(/* webpackChunkName: "about" */ '../views/Application.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import(/* webpackChunkName: "about" */ '../views/News.vue')
  },
  {
    path: '/newsdetail/:id',
    name: 'newsdetail',
    component: () => import('../views/Detail.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
