/*
 * @Author: Chris
 * @Date: 2019-09-25 02:22:29
 * @LastEditors: Chris
 * @LastEditTime: 2019-09-28 09:55:04
 */
import Vue from 'vue'
import Router from 'vue-router'
import UserLayout from '@/layouts/UserLayout';
import HomeLayout from '@/layouts/HomeLayout';

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/user',
      component: UserLayout,
      children: [{
        path: 'login',
        component: () => import('@/views/user/Login')
      }, {
        path: 'register',
        component: () => import('@/views/user/Register')
      }]
    },
    {
      path: '/',
      component: HomeLayout,
      children: [
        {
          path: 'enterpriseManage',
          name: 'enterpriseManage',
          component: () => import('@/views/enterpriseManage/List')
        },
        {
          path: 'rolePermission',
          name: 'rolePermission',
          component: () => import('@/views/systemManage/rolePermission/Index')
        }
      ]
    }
    // {
    //   path: '/login',
    //   name: 'Login',
    //   component: () => import('@/views/user/Login')
    // },
    // {
    //   path: '/register',
    //   name: 'Register',
    //   component: () => import('@/views/user/Register')
    // }
  ]
})
