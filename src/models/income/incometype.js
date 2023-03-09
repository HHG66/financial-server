/*
 * @Author: HHG
 * @Date: 2023-03-08 21:19:27
 * @LastEditTime: 2023-03-08 21:50:15
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/models/income/incometype.js
 * @文件说明: 
 */
const mongoose = require('mongoose')
const incometypeSchema = new mongoose.Schema({
  incomename: String,
  remarks: String,
  createdate: String
})

const IncomeType = mongoose.model('IncomeType', incometypeSchema)

module.exports = {
  IncomeType
}