/*
 * @Author: HHG
 * @Date: 2023-03-13 22:36:06
 * @LastEditTime: 2023-03-13 22:49:38
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/controller/income/editassociatedincome.js
 * @文件说明: 
 */
const serve=require('@/service/income/editassociatedincome')
module.exports=async(ctx,next)=>{
  let {associatedIncomeId,billIncomeName,incomTypeName,remarks}=ctx.request.body
  ctx.request.body={
    _id:associatedIncomeId,
    billincomename:billIncomeName,
    incomtypename:incomTypeName,
    remarks:remarks,
  }
  const rusult=await serve(ctx)
  if(rusult){
    response(ctx,{},{message:'修改成功'})
  }
}