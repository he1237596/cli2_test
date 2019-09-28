/*
 * @Author: Chris
 * @Date: 2019-09-25 20:21:33
 * @LastEditors: Chris
 * @LastEditTime: 2019-09-26 10:39:32
 * @Descripttion: **
 */
import axios from '@/utils/request'
const user = {
  login (params) {
    return axios.post('/api/user/login', params)
  },
  logout () {

  }
}
export default user;
