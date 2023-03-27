/*
 * @Author: HHG
 * @Date: 2023-03-19 19:49:32
 * @LastEditTime: 2023-03-19 20:36:05
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/controller/budget/getimportrecords.js
 * @文件说明: 
 */
const serve=require('@/service/budget/getimportrecords.js')
module.exports=async(ctx,next)=>{
 
  let result=await serve(ctx)
  if(result){
    //分页先写死
    response(ctx,{
      list:result,
      pagesize:10,
      current:1,
      total:100
    })
  }
}