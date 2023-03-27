/*
 * @Author: HHG
 * @Date: 2023-03-16 17:38:44
 * @LastEditTime: 2023-03-16 22:02:40
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/controller/budget/newfinancialrecord.js
 * @文件说明: 
 */
const serve = require('@/service/budget/newfinancialrecord.js')
module.exports = async (ctx, next) => {
  // let { balancepaymenttype,type,name,amount,date} = ctx.request.body
  // ctx.request.body={
  // }
  let rusult = await serve(ctx)
  if (rusult) {
    response(ctx, {}, { message: '新增成功' })
  }
}