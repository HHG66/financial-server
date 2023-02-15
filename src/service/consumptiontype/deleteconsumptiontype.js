/*
 * @Author: HHG
 * @Date: 2023-02-15 22:40:11
 * @LastEditTime: 2023-02-15 22:40:11
 * @LastEditors: 韩宏广
 * @FilePath: /Personal-finance/src/service/consumptiontype/deleteconsumptiontype.js
 * @文件说明: 
 */
const { deleteconsumptiontype } = require('mapper/consumptiontype/index')
module.exports = async (ctx, next) => {
  let result = await deleteconsumptiontype(ctx.request.body)
  return result
}