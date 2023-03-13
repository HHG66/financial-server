/*
 * @Author: HHG
 * @Date: 2023-03-13 22:37:30
 * @LastEditTime: 2023-03-13 22:48:23
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/service/income/editassociatedincome.js
 * @文件说明: 
 */
const {editassociatedincome} =require('@/mapper/income/associatedincome')
module.exports=async(ctx)=>{
  const mapperRusult=await editassociatedincome({...ctx.request.body})
  return mapperRusult
}