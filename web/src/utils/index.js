/*
 * @Author: HHG
 * @Date: 2022-09-02 14:37:41
 * @LastEditTime: 2022-10-22 00:45:25
 * @LastEditors: 韩宏广
 * @FilePath: /个人财务/web/src/utils/index.js
 * @文件说明: 
 */

//取localstorage
export function getLocalStorage(key) {
   return window.localStorage.getItem(key)
  // return JSON.parse(window.localStorage.getItem(key))  
}
//存localstorage
export function setLocalStorage(key, value) {
  return window.localStorage.setItem(key, JSON.stringify(value))
}
/**
 * @description: 日期格式化
 * @param {*} date 
 * @return {String} YYYY-HH-DD
 */
export function formatDate(date) {
  var date1 = new Date(date)
    return date1.getFullYear() + '-' + (date1.getMonth() + 1) + '-' + date1.getDate() + ''
}
/**
 * @description: 日期格式化为年月日
 * @param {*} date
 * @param {*} format
 * @return {*}
 */
export function formatDateStandard(date) {
  var date2 = new Date(date)
    return date2.getFullYear() + '年' + (date2.getMonth() + 1) + '月' + date2.getDate() + '日'
}
/**
 * @description: 判断是否为邮箱
 * @param {string} str
 * @return {*}
 */
export function isEmail(str) {
  return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str)
}

/**
 * 10000 => "10,000"
 * @param {number} num
 */
 export function toThousandFilter(num) {
  return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}