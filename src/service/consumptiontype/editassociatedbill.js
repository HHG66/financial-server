/*
 * @Author: HHG
 * @Date: 2023-02-17 21:21:59
 * @LastEditTime: 2023-02-20 22:57:09
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/service/consumptiontype/editassociatedbill.js
 * @文件说明: 
 */
const { editassociatedbill } = require('@mapper/consumptiontype/associatedbill')

module.exports = async (ctx, next) => {
  let result = await editassociatedbill(ctx.request.body)
  return result
}