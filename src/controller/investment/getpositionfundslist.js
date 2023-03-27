/*
 * @Author: HHG
 * @Date: 2023-03-21 22:29:11
 * @LastEditTime: 2023-03-25 22:37:22
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/controller/investment/getpositionfundslist.js
 * @文件说明: 
 */
const serve=require('@/service/investment/getpositionfundslist.js')
module.exports=async(ctx,next)=>{
  let result=await serve(ctx)
  if(result){
    response(ctx,result)
  }
}