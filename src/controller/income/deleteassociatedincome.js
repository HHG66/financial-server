/*
 * @Author: HHG
 * @Date: 2023-03-13 22:51:35
 * @LastEditTime: 2023-03-13 23:07:59
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/controller/income/deleteassociatedincome.js
 * @文件说明: 
 */
const serve = require('@/service/income/deleteassociatedincome')
module.exports = async (ctx, next) => {
  const result = await serve(ctx.request.body.billIncomeNameId)
  if (result) {
    response(ctx, {}, { message: '删除成功' })
  }
}



