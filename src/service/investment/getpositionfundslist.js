/*
 * @Author: HHG
 * @Date: 2023-03-22 21:17:36
 * @LastEditTime: 2023-04-12 09:47:32
 * @LastEditors: 韩宏广
 * @FilePath: \server\src\service\investment\getpositionfundslist.js
 * @文件说明: 
 */
const { getpositionfundslist } = require('@/mapper/investment/index.js')

module.exports = async (ctx) => {
  let mapperResult = await getpositionfundslist(ctx.query)
  return mapperResult
}
