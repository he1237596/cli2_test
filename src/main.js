/*
 * @Author: Chris
 * @Date: 2019-09-25 02:22:29
 * @LastEditors: Chris
 * @LastEditTime: 2019-10-06 17:48:23
 * @Descripttion: **
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import api from './api' // 导入api接口
import Components from '@/components/index.js'
import {
  Card,
  Aside,
  Container,
  Header,
  Main,
  Button,
  Select,
  Option,
  Input,
  Form,
  FormItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Table,
  TableColumn,
  Pagination,
  Message,
  Dialog
} from 'element-ui';
Vue.use(Card);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Button)
Vue.use(Select)
Vue.use(Option)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Components);// 自定义组件集合
Vue.prototype.$message = Message;
Vue.prototype.$api = api; // 将api挂载到vue的原型上
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  // iView.LoadingBar.start();//loadong 效果
  // 获取本地存储的token
  console.log(store.state.logined)
  // sessionStorage.getItem('token') && (store.state.logined = true);
  // 判断该路由是否需要登录权限
  if (to.meta.checkLogin) {
    // 通过vuex state获取当前的token是否存
    console.log(store.state.logined)
    sessionStorage.getItem('userInfo') && store.commit('LOGIN', JSON.parse(sessionStorage.getItem('userInfo')));
    // store.commit('setIsLogin', window.localStorage.getItem('isLogin'));
    if (store.state.logined) {
      next();
    } else {
      next({
        name: 'login',
        // 将跳转的路由path作为参数，登录成功后跳转到该路由
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next();
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
