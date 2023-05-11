const mongoose = require('mongoose')

const loan = new mongoose.Schema({
  loanname: String,//贷款单名称
  loanamount: Number,//贷款金额
  paymentmethod: String,//还款方式
  interest: Number,//总利息
  remainingpayments: Number,//剩余金额
  info: mongoose.Schema.Types.Mixed,//贷款单详细信息
  // numberperiods: Number,//期数
  // repaymentdate: Date,  //还款日期
  // openingbalance: Number,//期初余额
  // plannedrepayment: Number,//计划还款
  // additionalrepayment: Number,//额外还款
  // accumulatedinterest: Number,//累计利息
  // principal: Number,//本金
  // closingbalance: Number,//期终余额
  // loanstate: Boolean,//是否已还款
})
const Loan = mongoose.model('loan', loan)

module.exports = Loan

