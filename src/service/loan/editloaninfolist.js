const { editloaninfolist, } = require('@/mapper/loan/index.js')
module.exports = async (data) => {
  let { loanid, numberperiods, repaymentdate, openingbalance, plannedrepayment, additionalrepayment, accumulatedinterest, principal, closingbalance, loanstate } = data

  //情况一 修改了期数需要重新生成还款列表
  //情况二 修改了还款状态需要重新计算剩余还款金额
  //情况三 如果修改额外还款，需要重新计算剩下的还款列表
  //请款四 不允许修改隔期的还款状态
  

  let mapperRusult = await editloaninfolist({})
  if (mapperRusult.modifiedCount != 0) {
    return {
      state: true
    }
  } else {
    return {
      state: false
    }
  }
}