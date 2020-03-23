import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/countries',
    name: 'Home',
    component: Home
  },
  {
    path: '/reports',
    name: 'Report',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Reports.vue'),
    children: [
      {
        path: '/add',
        name: 'Add',
        components: Add
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
