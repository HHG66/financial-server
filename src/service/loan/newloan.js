const { newLoan } = require('@/mapper/loan/index.js')
var dayjs = require('dayjs')
const BigNumber = require('bignumber.js');

module.exports = async (data) => {
  let { loanname, loanamount, paymentmethod, interest, remainingpayments, numberperiods, phaseonedate, whethercanprepayment } = data
  let loaninfo = {}
  let loanStagingList = []
  let repaymentMonth = dayjs(phaseonedate).month()
  let canprepayment = whethercanprepayment || true
  //区分还款方式，然后根据期数和还款方式计算每期还款金额，这里暂时写固定值
  for (let index = 1; index <= numberperiods; index++) {
    //计算还款日期
    if (index == 1) {
      repaymentMonth = repaymentMonth
    } else {
      repaymentMonth = repaymentMonth + 1
    }
    let repaymentdate = new Date(dayjs(phaseonedate).month(repaymentMonth).add(8, 'hour'))
    //小于0就说明还完了
    let closingbalance = new BigNumber(loanamount).minus(new BigNumber(loanamount).dividedBy(numberperiods).multipliedBy(index))
    if (closingbalance < 0) {
      closingbalance = 0
    }
    loanStagingList.push({
      numberindex: index,
      repaymentdate: repaymentdate, //还款日期
      plannedrepayment: new BigNumber(loanamount).dividedBy(numberperiods),//计划还款
      additionalrepayment: 0,//额外还款
      openingbalance: new BigNumber(loanamount).minus(new BigNumber(loanamount).dividedBy(numberperiods).multipliedBy(index - 1)),
      accumulatedinterest: 30,  //先不计算（不会计算）
      closingbalance: closingbalance,
      loanstate: false,
    })
  }
  loaninfo.numberperiods = numberperiods
  // loaninfo.repaymentdate = new Date()
  loaninfo.openingbalance = 0
  loaninfo.plannedrepayment = 0
  loaninfo.additionalrepayment = 0
  loaninfo.accumulatedinterest = 0
  loaninfo.principal = 0
  loaninfo.closingbalance = 0
  loaninfo.additionalrepayment = 0
  loaninfo.loanstate = true

  let mapperResult = await newLoan({ loanname, loanamount, loanamount, paymentmethod, interest, remainingpayments, numberperiods, whethercanprepayment: canprepayment, info: loaninfo, loanstaging: loanStagingList })
  if (mapperResult) {
    return {
      state: true
    }
  } else {
    return {
      state: false
    }
  }
}