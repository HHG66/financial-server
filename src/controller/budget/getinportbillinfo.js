/*
 * @Author: HHG
 * @Date: 2023-03-20 21:21:22
 * @LastEditTime: 2023-03-20 22:24:11
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/controller/budget/getinportbillinfo.js
 * @文件说明: 
 */
const serve = require('@/service/budget/getinportbillinfo.js')
module.exports = async (ctx, next) => {
  let result = await serve(ctx.query.batchid)
  console.log(result);
  if (result.state !== 'err') {
    response(ctx, result)
  } else {
    response(ctx, {}, { code: "00001", message: result.message })
  }
}