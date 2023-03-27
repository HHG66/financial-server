/*
 * @Author: HHG
 * @Date: 2023-03-21 22:52:03
 * @LastEditTime: 2023-03-27 22:12:34
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/models/fund/idnex.js
 * @文件说明: 
 */
const mongoose = require('mongoose')

const fund =new mongoose.Schema({
  fundname:String,
  fundcode:String,
  amountinvested:Number,//投入金额
  buytime:String,
  amount:Number,
  plate:String,
  saledate:String,
  fundstate:Array,
  proportionpositionsheld:Number,
  currentprice:Number,
  currentearnings:Number,
  earningspercentage:Number,
  earnings:Number,
  fundid:String,
  holdingstate:String,
  costprice:String,
})

const Fund= mongoose.model('fund', fund)

module.exports=Fund