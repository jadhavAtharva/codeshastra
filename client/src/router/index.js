import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import home from '@/components/home'
import signup from '@/components/signup'
import scanner from '@/components/scanner'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/scanner',
      name: 'scanner',
      component: scanner
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    }
  ]
})
