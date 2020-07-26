import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
    },
    {
      path: '/shop/:category',
      name: 'shop',
      component: () => import(/* webpackChunkName: "shop" */ '../views/Shop.vue'),
    },
  {
    path: '/sign-in',
    name: 'signInUp',
    component: () => import(/* webpackChunkName: "about" */ '../views/SignInAndUp.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
