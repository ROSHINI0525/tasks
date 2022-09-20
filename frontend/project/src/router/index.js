import Vue from 'vue'
import VueRouter from 'vue-router'
import searchKey from '@/components/searchKey.vue'
import customerTable from '@/components/customerTable.vue'
import hotelTable from '@/components/hotelTable.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/searchKey',
    name: 'searchKey',
    component: searchKey

  },
  {
    path: '/customerTable',
    name: 'customerTable',
    component: customerTable

  },
  {
    path: '/hotelTable',
    name: 'hotelTable',
    component: hotelTable

  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
