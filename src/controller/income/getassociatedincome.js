/*
 * @Author: HHG
 * @Date: 2023-03-12 22:30:12
 * @LastEditTime: 2023-03-12 23:36:08
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/controller/income/getassociatedincome.js
 * @文件说明: 
 */
const serve = require('@/service/income/getassociatedincome')
module.exports = async (ctx, next) => {
  let { associatedIncomeName, remarks, incomTypeName } = ctx.query
  console.log({[remarks == '' ? undefined : "remarks"]: remarks == '' ? undefined : remarks});

  let searchData={
    billincomename:associatedIncomeName,
    remarks:remarks,
    incometypename:incomTypeName,
  }  
  ctx.query = searchData

  const result = await serve(ctx)
  if(result){
    response(ctx,result)
  }
}