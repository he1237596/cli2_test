/*
 * @Author: Chris
 * @Date: 2019-09-25 17:20:04
 * @LastEditors: Chris
 * @LastEditTime: 2019-10-06 17:23:52
 * @Descripttion: **
 */
import axios from 'axios';
import { Message } from 'element-ui';
import router from '@/router';
import constants from './constants';
import { getEncryptedStr } from './util';
// 环境的切换
if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://120.79.9.183:60004';
} else if (process.env.NODE_ENV === 'debug') {
  axios.defaults.baseURL = '';
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = '';
}
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/json;';
// const version = '1.0.0';
// const timestamp = Date.parse(new Date()) / 1000;
// const toLogin = () => {
//   router.replace({
//     path: '/login',
//     query: {
//       redirect: router.currentRoute.fullPath
//     }
//   });
// }
// const tip = msg => {
//   Toast({
//     message: msg,
//     duration: 1000,
//     forbidClick: true
//   });
// }

/**
 * @name: Chris
 * @Descripttion:
 * 请求拦截器
 * 每次请求前，如果存在token则在请求头中携带token
 */

axios.interceptors.request.use(
  config => {
    // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
    // config.data = JSON.stringify(config.data);
    // config.headers = {
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // }
    console.log(config)
    const { id, token } = JSON.parse(sessionStorage.getItem('userInfo')) || {};
    // console.log(userInfo);
    if (!id) {
      return config;
    }
    const timestamp = Date.now();
    const signature = getEncryptedStr(token, constants.userPublicKey);

    // const token = ''
    // token && (config.headers.Authorization = token);
    config.headers = {
      keyId: constants.userPublicKeyId,
      signature,
      sessionId: id,
      timestamp
    }
    return config;
  },
  error => {
    // return Promise.reject(error);
    return Promise.error(error);
  }
);
/**
 * @name: Chris
 * @Descripttion:
 * 响应拦截器
 */
axios.interceptors.response.use(
  response => {
    if (response.data.code === 609 || response.data.code === 498) {
      router.replace({
        path: '/user/login',
        query: { redirect: router.currentRoute.fullPath }// 从哪个页面跳转
      }, () => {
        Message.error(response.data.msg)
      })
    }
    // toLogin()
    return response;
  },
  error => Promise.reject(error)
)

export default {
  get: function (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: params
      })
        .then(response => {
          resolve(response.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  post: function (url, param = {}) {
    // Toast.loading({
    //   mask: true,
    //   message: '请稍候...',
    //   duration: 0,
    //   forbidClick: true,
    //   mask: false
    // });
    // param.userId = sessionStorage.getItem('userId');
    // param = JSON.stringify(param);
    return new Promise((resolve, reject) => {
      axios.post(url, param)
        .then(response => {
          // Toast.clear();
          resolve(response.data);
        }, err => {
          // Toast.fail('网络错误');
          reject(err);
        });
    });
  },
  patch: function (url, data = {}) {
    return new Promise((resolve, reject) => {
      axios.patch(url, data)
        .then(response => {
          resolve(response.data);
        }, err => {
          reject(err);
        });
    });
  },
  put: function (url, data = {}) {
    return new Promise((resolve, reject) => {
      axios.put(url, data)
        .then(response => {
          resolve(response.data);
        }, err => {
          reject(err);
        });
    });
  }
};
