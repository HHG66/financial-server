/*
 * @Author: HHG
 * @Date: 2023-03-14 19:58:44
 * @LastEditTime: 2023-03-18 19:55:49
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/service/budget/getbalancepayments.js
 * @文件说明: 
 */
const { getbalancepayments } = require('@/mapper/budget/index')
module.exports = async (ctx) => {
  let mapperResult = await getbalancepayments(ctx.query.date)
  return mapperResult
}