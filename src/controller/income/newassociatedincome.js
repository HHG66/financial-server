/*
 * @Author: HHG
 * @Date: 2023-03-12 20:55:30
 * @LastEditTime: 2023-03-12 21:42:00
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/controller/income/newassociatedincome.js
 * @文件说明: 
 */
const serve = require('@/service/income/newassociatedincome')
module.exports = async (ctx, next) => {
  let rusult = await serve(ctx)
  if (rusult) {
    response(ctx, {}, { message: '新增成功' })
  }
}