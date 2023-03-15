/*
 * @Author: HHG
 * @Date: 2023-03-15 17:03:57
 * @LastEditTime: 2023-03-16 00:12:48
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/controller/budget/getdisposebill.js
 * @文件说明: 
 */
const serve = require('@/service/budget/getdisposebill.js')
module.exports = async (ctx, next) => {
  let { date } = ctx.query
  if (date) {
    ctx.request.body = date.replace('-', '/')
  }
  let rusult = await serve(ctx)
  //分页先写死
  response(ctx, { list: rusult, total: 100, pagesize: 10, current: 1 }, { message: "请求成功" })
}