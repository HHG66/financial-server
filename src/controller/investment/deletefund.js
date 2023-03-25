/*
 * @Author: HHG
 * @Date: 2023-03-25 22:44:12
 * @LastEditTime: 2023-03-25 23:04:37
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/controller/investment/deletefund.js
 * @文件说明: 
 */
const serve = require('@/service/investment/deletefund.js')
module.exports = async (ctx, next) => {
  let rusult = await serve(ctx)
  if (rusult) {
    response(ctx, {}, { message: "删除成功" })
  }else{
    response(ctx, {}, { message: "删除失败" })
  }
}