/*
 * @Author: HHG
 * @Date: 2023-04-10 22:33:06
 * @LastEditTime: 2023-05-01 00:59:32
 * @LastEditors: 韩宏广
 * @FilePath: /server/src/controller/investment/getfundtypelist.js
 * @文件说明: 
 */
const serve = require('@/service/investment/getfundtypelist')
module.exports = async (ctx, next) => {
  let result = await serve()
  if (result) {
    response(ctx, {}, { message: `更新成功` })
  }
}