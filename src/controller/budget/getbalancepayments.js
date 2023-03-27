/*
 * @Author: HHG
 * @Date: 2023-03-14 19:56:34
 * @LastEditTime: 2023-03-18 19:55:18
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/controller/budget/getbalancepayments.js
 * @文件说明: 
 */
const serve = require('@/service/budget/getbalancepayments')
module.exports = async (ctx, next) => {
  // let {date}=ctx.query
  // ctx.query={
  //   date:date.replace('-','/')
  // }
  let result =await serve(ctx)
  if (result) {
    response(ctx, result)
  }
}