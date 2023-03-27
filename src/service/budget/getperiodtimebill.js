/*
 * @Author: HHG
 * @Date: 2023-03-18 17:45:06
 * @LastEditTime: 2023-03-18 19:14:46
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/service/budget/getperiodtimebill.js
 * @文件说明: 
 */
const { getperiodtimebill } = require('@/mapper/budget/index.js')
module.exports = async (ctx, next) => {
  let { startdate, enddate } = ctx.query
  let mapperResult = await getperiodtimebill(startdate, enddate)
  return mapperResult
}