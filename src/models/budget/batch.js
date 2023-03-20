/*
 * @Author: HHG
 * @Date: 2023-03-19 19:36:03
 * @LastEditTime: 2023-03-20 21:33:39
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/models/budget/batch.js
 * @文件说明: 
 */
const mongoose = require('mongoose')
const batch = new mongoose.Schema({
  batchname:String,
  importtime:String,
})
const Batch = mongoose.model('batch', batch)
module.exports = Batch