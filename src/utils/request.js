/*
 * @Author: Chris
 * @Date: 2019-09-25 17:20:04
 * @LastEditors: Chris
 * @LastEditTime: 2019-09-25 19:11:28
 * @Descripttion: **
 */
import axios from 'axios';
import util from './utils/util.js';
// 环境的切换
if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = '/api';
} else if (process.env.NODE_ENV === 'debug') {
  axios.defaults.baseURL = '';
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = 'http://api.123dailu.com/';
}

axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/json;';
const version = '1.0.0';
const timestamp = Date.parse(new Date()) / 1000;

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
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    const token = ''
    token && (config.headers.Authorization = token);
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
    // if (response.data.errCode == 2) {
    //   router.push({
    //     path: '/login',
    //     querry: { redirect: router.currentRoute.fullPath }//从哪个页面跳转
    //   })
    // }
    return response;
  },
  error => {
    return Promise.reject(error)
  }
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
          reject(err.data);
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
    param.userId = sessionStorage.getItem('userId');
    param = JSON.stringify(param);
    var data = {
      bizContent: param,
      sign: util.makeSign(param, timestamp, version),
      timestamp: timestamp,
      version: version
    };
    return new Promise((resolve, reject) => {
      axios.post(url, data)
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
