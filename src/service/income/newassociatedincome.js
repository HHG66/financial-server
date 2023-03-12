/*
 * @Author: HHG
 * @Date: 2023-03-12 21:01:13
 * @LastEditTime: 2023-03-12 22:35:49
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/service/income/newassociatedincome.js
 * @文件说明: 
 */
const { newAssociatedIncome } = require('@/mapper/income/associatedincome')
module.exports = async (ctx) => {
  console.log(ctx.request.body);
  let { billincomename, incomenameid, remarks } = ctx.request.body
  let serveRusult = await newAssociatedIncome(billincomename, incomenameid, remarks)
  return serveRusult
}