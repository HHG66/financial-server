/*
 * @Author: HHG
 * @Date: 2023-03-25 22:47:14
 * @LastEditTime: 2023-03-25 22:55:05
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/service/investment/deletefund.js
 * @文件说明: 
 */
const { deletefund } = require('@/mapper/investment/index.js')
module.exports = async (ctx) => {
  let mapperResult = await deletefund(ctx.request.body)
  console.log(mapperResult);
  return mapperResult
}