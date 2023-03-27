/*
 * @Author: HHG
 * @Date: 2023-03-21 22:41:40
 * @LastEditTime: 2023-03-21 23:24:13
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/controller/investment/newfund.js
 * @文件说明: 
 */
const serve = require('@/service/investment/newfund.js')
module.exports = async (ctx, next) => {
  console.log(ctx);
  let result = await serve(ctx)
  if (result) {
    response(ctx, {}, { message: '新增成功' })
  }
}