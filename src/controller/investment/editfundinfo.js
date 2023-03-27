/*
 * @Author: HHG
 * @Date: 2023-03-27 11:05:10
 * @LastEditTime: 2023-03-27 22:18:13
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/controller/investment/editfundinfo.js
 * @文件说明: 
 */
const serve = require('@/service/investment/editfundinfo.js')
module.exports = async (ctx, next) => {
  let { fundid: _id, fundstate, sellingnumber, sellingprice, addnumber, price } = ctx.request.body
  ctx.request.body = {
    _id,
    fundstate,
    sellingnumber,
    sellingprice,
    addnumber,
    price
  }

  let result = await serve(ctx.request.body)
  if (result) {
    response(ctx, {}, { message: "修改成成功" })
  }
}