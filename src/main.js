/*
 * @Author: Chris
 * @Date: 2019-09-25 02:22:29
 * @LastEditors: Chris
 * @LastEditTime: 2019-09-27 15:08:40
 * @Descripttion: **
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
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
  TableColumn
} from 'element-ui';
Vue.use(Card);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Button)
Vue.use(Select)
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
Vue.use(Components);// 自定义组件集合
Vue.config.productionTip = false
Vue.prototype.$api = api; // 将api挂载到vue的原型上
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
