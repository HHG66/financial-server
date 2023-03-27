/*
 * @Author: HHG
 * @Date: 2023-03-22 21:17:36
 * @LastEditTime: 2023-03-25 22:40:39
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/service/investment/getpositionfundslist.js
 * @文件说明: 
 */
const { getpositionfundslist } = require('@/mapper/investment/index.js')
module.exports = async (ctx) => {
  let mapperResult = await getpositionfundslist(ctx.query)
  console.log(mapperResult);
  return mapperResult
}