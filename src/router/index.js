import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Artesania from '../views/Artesania.vue'
import Circuitos from '../views/Circuitos.vue'
import Guias from '../views/Guias.vue'
import Hoteles from '../views/Hoteles.vue'
import Restaurant from '../views/Restaurant.vue'


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
  {
    path: '/circuitos',
    name: 'Circuitos',
    component: Circuitos
  },
  {
    path: '/guias',
    name: 'Guias',
    component: Guias
  },
  {
    path: '/hoteles',
    name: 'Hoteles',
    component: Hoteles
  },  {
    path: '/restaurant',
    name: 'Restaurant',
    component: Restaurant
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
