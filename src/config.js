/*
 * @Author: Chris
 * @Date: 2019-09-25 17:56:58
 * @LastEditors: Chris
 * @LastEditTime: 2019-09-25 17:59:09
 * @Descripttion: **
 */
let baseUrl = '';
let routerMode = 'hash';
let baseImgPath;

if (process.env.NODE_ENV === 'development') {
  baseUrl = '';
  baseImgPath = '/img/';
} else {
  baseUrl = '//elm.cangdu.org';
  baseImgPath = '//elm.cangdu.org/img/';
}

export {
  baseUrl,
  routerMode,
  baseImgPath
}
