/*
 * @Author: HHG
 * @Date: 2023-04-03 21:50:10
 * @LastEditTime: 2023-04-03 22:58:22
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/controller/investment/getfundnetworth.js
 * @文件说明: 
 */
const serve = require('@/service/investment/getfundnetworth')
module.exports = async (ctx, next) => {
  let result = await serve(ctx.request.body.fundid,ctx.request.body.fundcode)
  if (result) {
    response(ctx, result)
  }
}