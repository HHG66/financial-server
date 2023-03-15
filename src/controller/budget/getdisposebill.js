/*
 * @Author: HHG
 * @Date: 2023-03-15 17:03:57
 * @LastEditTime: 2023-03-15 17:03:58
 * @LastEditors: 韩宏广
 * @FilePath: \financial\src\controller\budget\getdisposebill.js
 * @文件说明: 
 */
const serve = require('@/service/budget/getdisposebill.js')
module.exports = async (ctx, next) => {
  let rusult = await serve()
  response(ctx, rusult, { message: "请求成功" })
}