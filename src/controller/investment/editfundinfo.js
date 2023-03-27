/*
 * @Author: HHG
 * @Date: 2023-03-27 11:05:10
 * @LastEditTime: 2023-03-27 11:30:58
 * @LastEditors: 韩宏广
 * @FilePath: \financial\src\controller\investment\editfundinfo.js
 * @文件说明: 
 */
const serve = require('@/service/investment/editfundinfo')
module.exports = async (ctx, next) => {
  let { fundid: _id, fundstate, sellingnumber, sellingprice, addnumber, price } = ctx.reuqest.body
  ctx.request.body = {
    _id,
    fundstate,
    sellingnumber,
    sellingprice,
    addnumber,
    price
  }

  let result = await editfundinfo(ctx.request.body)
  if (result) {
    response(ctx, {}, { message: "修改成成功" })
  }
}