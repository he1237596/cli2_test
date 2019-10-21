/*
 * @Author: Chris
 * @Date: 2019-09-25 02:22:29
 * @LastEditors: Chris
 * @LastEditTime: 2019-10-18 18:20:33
 */
import Vue from 'vue'
import Router from 'vue-router'
import UserLayout from '@/layouts/UserLayout';
import HomeLayout from '@/layouts/HomeLayout';

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/enterpriseManage'
    },
    {
      path: '/user',
      component: UserLayout,
      children: [{
        path: 'login',
        name: 'login',
        component: () => import('@/views/user/Login')
      }, {
        path: 'register',
        name: 'register',
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
          meta: { checkLogin: true },
          component: () => import('@/views/enterpriseManage/List')
        },
        {
          path: 'userManage',
          name: 'userManage',
          meta: { checkLogin: true },
          component: () => import('@/views/systemManage/userManage/List')
        },
        {
          path: 'rolePermission',
          name: 'rolePermission',
          meta: { checkLogin: true },
          component: () => import('@/views/systemManage/rolePermission/List')
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
