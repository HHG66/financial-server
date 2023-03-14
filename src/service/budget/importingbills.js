/*
 * @Author: HHG
 * @Date: 2023-03-14 20:02:54
 * @LastEditTime: 2023-03-15 00:05:24
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/service/budget/importingbills.js
 * @文件说明: 
 */
const { importingbills, } = require('@/mapper/budget/index.js')
module.exports = async (ctx, next) => {
  
  // ctx.request.body.forEach((element) => {
  //   let mapperRusult = importingbills(element)
  // });

  let mapperRusult=await importingbills(ctx.request.body)
  return mapperRusult
}