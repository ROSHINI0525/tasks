import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import searchKey from '@/components/searchKey.vue'
import studentsTable from '@/components/studentsTable.vue'
import booksTable from '@/components/booksTable.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  {
    path: '/searchKey',
    name: 'searchKey',
    component: searchKey

  },
  {
    path: '/studentsTable',
    name: 'studentsTable',
    component: studentsTable

  },
  {
    path: '/booksTable',
    name: 'booksTable',
    component: booksTable

  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
