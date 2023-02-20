/*
 * @Author: HHG
 * @Date: 2023-02-20 23:02:13
 * @LastEditTime: 2023-02-20 23:05:47
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/controller/consumptiontype/deleteassociatedbill.js
 * @文件说明: 
 */
const deleteassociatedbill = require('@service/consumptiontype/deleteassociatedbill.js')

module.exports = async (ctx, next) => {
  let respond = []
  //获取参数
  let { id } = ctx.request.body;
  //处理参数
  ctx.request.body = {
    _id: id
  }
  //业务层处理
  let serviceResult = await deleteassociatedbill(ctx, next)
  console.log(serviceResult);
  if (serviceResult) {
    response(ctx, {}, { message: '删除成功' })
  }
}
