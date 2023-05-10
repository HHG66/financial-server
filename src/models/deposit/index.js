const mongoose = require('mongoose')

const deposit = new mongoose.Schema({
  depositname: String,//存款单名称
  depositamount: Number,//存款金额
  depositinterest: Number,//存款利息（%）
  deposittime: Number,//存款期限（年）
  startdate:Date,
  enddate:Date
})

const Deposit = mongoose.model('deposit', deposit)
module.exports = Deposit