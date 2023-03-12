/*
 * @Author: HHG
 * @Date: 2023-03-12 21:07:55
 * @LastEditTime: 2023-03-12 21:39:16
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/models/income/associatedincome.js
 * @文件说明: 
 */
const mongoose = require('mongoose')
const  associatedIncomeSchema= new mongoose.Schema({
  billincomename: String,
  incomtypenameid: mongoose.Schema.Types.ObjectId,
  incomtypename:String,
  remarks: String,
  createdate: String
})

const AssociatedIncome = mongoose.model('AssociatedIncome', associatedIncomeSchema)

module.exports = {
  AssociatedIncome
}