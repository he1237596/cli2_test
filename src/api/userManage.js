/*
 * @Author: Chris
 * @Date: 2019-10-06 03:00:21
 * @LastEditors: Chris
 * @LastEditTime: 2019-10-06 03:35:12
 * @Descripttion: **
 */
// import { stringify } from 'qs';
import axios from '@/utils/request'
const userManage = {
  // 获取用户列表
  getList (params) {
    return axios.get('/api/user/list', params)
  }
}
export default userManage;
