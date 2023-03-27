/*
 * @Author: HHG
 * @Date: 2023-03-18 17:38:53
 * @LastEditTime: 2023-03-18 20:28:16
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/controller/budget/getperiodtimebill.js
 * @文件说明: 
 */
const serve = require('@/service/budget/getperiodtimebill.js')
module.exports = async (ctx, next) => {
  // let {startdate,enddate} =ctx.request.body
  let serveResult = await serve(ctx)
  if (serveResult) {
    response(ctx, serveResult)
  }
}