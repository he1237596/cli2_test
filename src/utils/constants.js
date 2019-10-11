/*
 * @Author: Chris
 * @Date: 2019-10-06 03:38:21
 * @LastEditors: Chris
 * @LastEditTime: 2019-10-06 03:39:56
 * @Descripttion: **
 */
const env = 'test';

const config = {
  // 测试库
  test: {
    // 云MES后台管理服务的URL
    baseUrl: 'http://120.79.9.183:60004',

    imageBaseUrl: 'https://images.mogulinker.com', // 系统图片的URL

    mesCloudUrl: 'http://52.81.146.173:7071',

    // U版请求加密
    userPublicKey:
      'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDju5SVGQByBGoz1sYRZn0HsLuH7I9mESro6nIiIL9pEVllkf5zPOsCLcLp1f1EYHScwZjWz8gfHw6Iq9Rqb83yo6oo/zM3RVBdKhUdlxEBIYQr30J258ESti5aqRnrs82rf79Qw3z5vUdz3/ZmIM7AjaNC/9N2mAqw7IqO6mUJuQIDAQAB',
    userPublicKeyId: '11e647ed3aaf49999aee110bf47ad31c',

    groupMonitorUrl: 'http://mesconf-test.mogulinker.com', // 组态图服务URL

    webServerUrl: 'http://mes-test.mogulinker.com' // 云MES web服务网址
  },
  // 正式库
  normal: {
    // 云MES后台管理服务的URL
    baseUrl: 'http://mes-admin-rest.mogulinker.com',

    imageBaseUrl: 'https://images.mogulinker.com', // 系统图片的URL

    mesCloudUrl: 'http://mes-cloud.mogulinker.com',

    // U版请求加密
    userPublicKey:
      'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCgTj64J845YrG9N7PhKXBk5ED7Mh6W7vBrBUKKNPDAk0FEOgwpZubsqImjwK8fUHwPrZfi1vtQ2DyeT2TjISM00jrRuXv+fUWNuHVveJkWgsP7/H0ssbkcSK/lPdOr78vb807iQ9YpvQ0t7OklJLZL/sQ/enMtLNbF/wphBEiNmwIDAQAB',
    userPublicKeyId: '7edf4d87f2c4464d9cc8ad714906e379',

    groupMonitorUrl: 'http://mesconf.mogulinker.com', // 组态图服务URL

    webServerUrl: 'http://mes-rest.mogulinker.com' // 云MES web服务网址
  }
};
export default config[env];
