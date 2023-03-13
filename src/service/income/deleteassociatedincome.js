/*
 * @Author: HHG
 * @Date: 2023-03-13 22:54:03
 * @LastEditTime: 2023-03-13 23:08:19
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/service/income/deleteassociatedincome.js
 * @文件说明: 
 */
const {deleteassociatedincome}=require('@/mapper/income/associatedincome')
module.exports=async(id)=>{
  const mapperRusult=await deleteassociatedincome(id)
  return mapperRusult
}