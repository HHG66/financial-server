/*
 * @Author: HHG
 * @Date: 2023-04-03 21:50:10
 * @LastEditTime: 2023-04-06 22:32:13
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/controller/investment/getfundnetworth.js
 * @文件说明: 
 */
const serve = require('@/service/investment/getfundnetworth')
module.exports = async (ctx, next) => {
  let result = await serve(ctx.request.body.fundid,ctx.request.body.fundcode)
  if (result.state==true) {
    response(ctx, {},{message:'更新基金净值成功'})
  }else{
    response(ctx, {},{code:'00001',message:result.message})
  }
}