/*
 * @Author: HHG
 * @Date: 2023-03-12 22:31:25
 * @LastEditTime: 2023-03-12 23:39:16
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/service/income/getassociatedincome.js
 * @文件说明: 
 */
const { getAssociatedIncome } = require('@/mapper/income/associatedincome')
module.exports = async (ctx) => {
  let backData=[]
  console.log(ctx.query);
  let {  billincomename, remarks, incometypename } = ctx.query
  let serveRusult = await getAssociatedIncome(billincomename, remarks, incometypename)
  // console.log(serveRusult);
  serveRusult.forEach(element => {
    backData.push({
      incomtypename:element.incomtypename,
      billincomename:element.billincomename,
      remarks:element.remarks,
      id:element._id
    })
  });
  console.log(backData);
  return backData
}