/*
 * @Author: HHG
 * @Date: 2023-03-14 20:49:29
 * @LastEditTime: 2023-03-14 22:53:49
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/models/budget/index.js
 * @文件说明: 
 */
const mongoose = require('mongoose')
const bill = new mongoose.Schema({
  tradinghours:Date,
  tradetype:String,
  counterparty:String,
  goods:String,
  collectorbranch:String,
  amount:String,
  currentstate:String,
  trasactionid:String,
  merchantstoorder:String,
  remark:String
})

const Bill = mongoose.model('bill', bill)

module.exports = {
  Bill
}