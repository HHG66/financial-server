/*
 * @Author: HHG
 * @Date: 2023-03-21 22:42:18
 * @LastEditTime: 2023-03-21 23:27:00
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/service/investment/newfund.js
 * @文件说明: 
 */
const { newfund } = require('@/mapper/investment/index.js')
const {getTianFundDetails} =require('@/service/other/thirdpartyapi.js')
module.exports = async (ctx) => {
  let mapperData={}
  console.log(ctx.request.body);
 let {}= await getTianFundDetails(ctx.request.body.fundcode)
 mapperData={
  ...ctx.request.body,
  plate:fundInfo.
 }
  let mapperResult = await newfund(ctx.request.body,fundInfo)
  return mapperResult
}