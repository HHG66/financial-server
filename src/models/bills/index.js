/*
 * @Author: HHG
 * @Date: 2023-03-16 22:04:11
 * @LastEditTime: 2023-03-16 23:06:00
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/models/bills/index.js
 * @文件说明: 
 */
const mongoose = require('mongoose')
const check = new mongoose.Schema({
  // new mongoose.Types.ObjectId()
  balancepaymenttype: String,
  type: mongoose.Types.ObjectId,
  typename: String,//类型名称，根据type查出名称
  name: String,
  amount: Number,
  date: String
})

const Check = mongoose.model('check', check)

module.exports = {
  Check
}