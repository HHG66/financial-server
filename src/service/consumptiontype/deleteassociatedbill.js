/*
 * @Author: HHG
 * @Date: 2023-02-20 23:03:30
 * @LastEditTime: 2023-02-20 23:03:31
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/service/consumptiontype/deleteassociatedbill.js
 * @文件说明: 
 */
const { deleteassociatedbill } = require('@mapper/consumptiontype/associatedbill')
module.exports = async (ctx, next) => {
  let result = await deleteassociatedbill(ctx.request.body)
  return result
}