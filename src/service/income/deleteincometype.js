/*
 * @Author: HHG
 * @Date: 2023-03-12 11:44:48
 * @LastEditTime: 2023-03-12 14:24:11
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/service/income/deleteincometype.js
 * @文件说明: 
 */
const { deleteincometype } = require('@/mapper/income/index.js')
module.exports = async (ctx, next) => {
  let serveResult = await deleteincometype(ctx.request.body._id)
  return serveResult
}