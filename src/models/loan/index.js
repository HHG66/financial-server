const mongoose = require('mongoose')

const loan = new mongoose.Schema({
  loanname: String,//贷款单名称
  loanamount: Number,//贷款金额
  paymentmethod: String,//还款方式
  // interest: Number,//总利息
  remainingpayments: Number,//剩余金额
  // numberperiods: Number,//期数
  phaseonedate: Date,//第一期还款时间
  whethercanprepayment:Boolean,//是否可以提前还款
  info: [mongoose.Schema.Types.Mixed],//贷款单详细信息
  loanstaging: [mongoose.Schema.Types.Mixed] //每期还款信息

  // repaymentdate: Date,  //还款日期
  // openingbalance: Number,//期初余额
  // plannedrepayment: Number,//计划还款
  // additionalrepayment: Number,//额外还款
  // accumulatedinterest: Number,//累计利息
  // principal: Number,//本金（不需要）
  // closingbalance: Number,//期终余额
  // loanstate: Boolean,//是否已还款
  // loanlife： Number//贷款年限
  // annualinterestrate ：Number //年利率
  // currentnumberissues：：Number  //当前期数
})
const Loan = mongoose.model('loan', loan)

module.exports = Loan

