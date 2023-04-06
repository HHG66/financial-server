/*
 * @Author: HHG
 * @Date: 2023-03-21 22:52:03
 * @LastEditTime: 2023-04-06 22:01:29
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/models/fund/idnex.js
 * @文件说明: 
 */
const mongoose = require('mongoose')

const fund =new mongoose.Schema({
  fundname:String,//基金名称
  fundcode:String,//；基金代码
  amountinvested:Number,//投入金额
  buytime:String,//买入时间
  amount:Number,//总数
  plate:String,//板块
  saledate:String,//卖出时间
  fundstate:[String],//最近操作
  proportionpositionsheld:Number,//持仓占比
  currentprice:Number,//当日价格
  currentearnings:Number,//单日盈亏
  earningspercentage:Number,//盈亏百分比
  earnings:Number,//盈亏（元）
  // fundid:String,
  holdingstate:String,//持仓状态
  costprice:String,//成本
  updatetime:Date , //更新时间，非基金字段
  fundnetworth:Object// 基金净值
})

const Fund= mongoose.model('fund', fund)

module.exports=Fund