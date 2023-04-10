/*
 * @Author: HHG
 * @Date: 2023-04-10 22:39:49
 * @LastEditTime: 2023-04-10 22:45:21
 * @LastEditors: 韩宏广
 * @FilePath: /server/src/models/fund/fundtype.js
 * @文件说明: 
 */

const mongoose = require('mongoose')

const fundtype = new mongoose.Schema({
  fundcode:String,
  shortname:String,
  fundname:String,
  fundtype:String,
  fundfullname:String
})

const FundType = mongoose.model('fundtype', fundtype)

module.exports = FundType