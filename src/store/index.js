/*
 * @Author: Chris
 * @Date: 2019-09-29 19:51:59
 * @LastEditors: Chris
 * @LastEditTime: 2019-10-05 18:32:34
 * @Descripttion: **
 */
import Vue from 'vue'
import Vuex from 'vuex'
// import state from './state'
// import mutations from './mutations'
// import actions from './actions'
// import getters from './getters'
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const state = {
  userInfo: {},
  logined: false
};

const mutations = {
  [LOGIN] (state, userInfo) {
    Object.assign(state, { userInfo, logined: true })
  },
  [LOGOUT] (state, userInfo) {
    state.logined = false;
    sessionStorage.clear();
  }
}
const actions = {

};
Vue.use(Vuex)
export default new Vuex.Store({
  state,
  actions,
  mutations
});
