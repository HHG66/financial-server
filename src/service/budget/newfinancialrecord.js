/*
 * @Author: HHG
 * @Date: 2023-03-16 17:39:06
 * @LastEditTime: 2023-03-16 23:25:41
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/service/budget/newfinancialrecord.js
 * @文件说明: 
 */
const { newfinancialrecord, getType } = require('@/mapper/budget/index.js')
const { IncomeType } = require('@/models/income/incometype.js')
const { Consumptiontype } = require('@/models/consumptiontype/type.js')

module.exports = async (ctx) => {
  // let typename
  let mapperResult
  let fileds
  if (ctx.request.body.balancepaymenttype == '收入') {
    var { incomename: typename } = await getType(IncomeType, ctx.request.body.type)
  } else {
    var { consumptiontypename: typename } = await getType(Consumptiontype, ctx.request.body.type)
  }
  console.log(typename);
  fileds = {
    ...ctx.request.body,
    typename: typename
  }
  mapperResult = await newfinancialrecord(fileds)
  console.log(mapperResult);
  return mapperResult
}