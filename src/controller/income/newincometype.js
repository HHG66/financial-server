/*
 * @Author: HHG
 * @Date: 2023-03-08 21:10:09
 * @LastEditTime: 2023-03-08 21:40:00
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/controller/income/newincometype.js
 * @文件说明: 
 */
const newincometype = require('@service/income/newincometype.js')

module.exports = async (ctx, next) => {
  //获取参数
  // let { incomename, remarks } = ctx.request.body;
  //处理参数
  const serveResult = await newincometype(ctx, next)
  console.log(serveResult);
  if (serveResult) {
    response(ctx, {}, { message: "添加成功" })
  } else {
    response(ctx, {}, { message: "添加失败" })
  }
}