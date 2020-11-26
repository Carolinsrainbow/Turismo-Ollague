import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Artesania from  '../views/Artesania.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/artesania',
    name: 'Artesania',
    component: Artesania
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
