/*
 * @Author: HHG
 * @Date: 2023-03-12 21:06:46
 * @LastEditTime: 2023-03-12 21:40:36
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/mapper/income/associatedincome.js
 * @文件说明: 
 */
const { AssociatedIncome } = require('@/models/income/associatedincome')
const { IncomeType } = require('@/models/income/incometype.js')
const { add,findOne } = require('../index')
module.exports = {
  newassociatedincome: async(billincomename,incomenameid,remarks) => {
   let incomeType=await findOne(IncomeType,{_id:incomenameid})
   if(incomeType){
    return add(AssociatedIncome, { billincomename: billincomename, incomtypenameid: incomeType._id,incomtypename:incomeType.incomename,remarks,createdate:new Date().toLocaleDateString() })
   }else{
    return 'err'
   }
  }
}