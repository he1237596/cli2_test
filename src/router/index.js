/*
 * @Author: Chris
 * @Date: 2019-09-25 02:22:29
 * @LastEditors: Chris
 * @LastEditTime: 2019-09-25 10:30:02
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('@/components/HelloWorld')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/user/Login')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/views/user/Register')
    }
  ]
})
