import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Candidate from '../components/Candidate.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/candidate/:id',
    name: 'Candidate',
    component: Candidate
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
