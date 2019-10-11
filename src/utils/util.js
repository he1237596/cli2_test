/*
 * @Author: Chris
 * @Date: 2019-09-25 17:15:49
 * @LastEditors: Chris
 * @LastEditTime: 2019-10-06 03:52:37
 * @Descripttion: **
 */
import { JSEncrypt } from 'jsencrypt';

/**
 * @description 根据传入的key，加密字符串
 * @export
 * @param {*} publicKey 加密的publicKey
 * @param {string} [encrytStr=''] 待加密的字符串
 * @returns
 */
export const getEncryptedStr = (encrytStr = '', publicKey) => {
  if (!publicKey || !encrytStr) return encrytStr;
  const encrypt = new JSEncrypt();
  encrypt.setPublicKey(publicKey);
  const ret = encrypt.encrypt(encrytStr);
  return ret;
}

// 生成uuid
export const uuids = () => {
  const s = [];
  const hexDigits = '0123456789abcdef';
  for (let i = 0; i < 36; i += 1) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = '4'; // bits 12-15 of the time_hi_and_version field to 0010
  // eslint-disable-next-line
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
  // eslint-disable-next-line
  s[8] = s[13] = s[18] = s[23] = '-';
  const uuid = s.join('');
  return uuid;
}
