/*
 * @Author: HHG
 * @Date: 2023-03-21 22:52:03
 * @LastEditTime: 2023-03-28 10:05:21
 * @LastEditors: 韩宏广
 * @FilePath: \financial\src\models\fund\idnex.js
 * @文件说明: 
 */
const mongoose = require('mongoose')

const fund =new mongoose.Schema({
  fundname:String,//基金名称
  fundcode:String,//；基金代码
  amountinvested:Number,//投入金额
  buytime:String,//买入时间
  amount:Number,//总数
  plate:String,//
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