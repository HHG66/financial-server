/*
 * @Author: HHG
 * @Date: 2023-03-22 21:17:36
 * @LastEditTime: 2023-04-11 23:04:33
 * @LastEditors: 韩宏广
 * @FilePath: /server/src/service/investment/getpositionfundslist.js
 * @文件说明: 
 */
const { getpositionfundslist } = require('@/mapper/investment/index.js')
const http = require('node:http');
const qs = require('querystring');

module.exports = async (ctx) => {
  let mapperResult = await getpositionfundslist(ctx.query)
  return mapperResult
}
