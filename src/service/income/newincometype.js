/*
 * @Author: HHG
 * @Date: 2023-03-08 21:14:15
 * @LastEditTime: 2023-03-08 21:44:40
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/service/income/newincometype.js
 * @文件说明: 
 */
const {addincometype} = require('@/mapper/income/index.js')
module.exports = async (ctx, next) => {
  let { incomename, remarks } = ctx.request.body;
  let result = await addincometype(incomename, remarks)
  return result
}