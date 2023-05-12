//情况一 修改了还款状态需要重新计算剩余还款金额
//情况二 如果修改额外还款，需要重新计算剩下的还款列表
//请款三 不允许修改隔期的还款状态
let { loanid, numberperiods, repaymentdate, openingbalance, plannedrepayment, additionalrepayment, accumulatedinterest, principal, closingbalance, loanstate } = data
//情况一 修改了期数需要重新生成还款列表   列表不允许修改期数
let loanInfo = await getLoanInfoList(loanid)
let loanField = {}
let plannedrepayment = new BigNumber(loanInfo.loanamount).dividedBy(numberperiods)
if (loanInfo.numberperiods !== numberperiods) {
  let repaymentMonth = dayjs(repaymentdate).month()
  for (let index = 1; index < numberperiods; index++) {
    loanField.numberindex = index;
    if (index == 1) {
      repaymentMonth = repaymentMonth
    } else {
      repaymentMonth = repaymentMonth + 1
    }
    //还款日期计算
    loanField.repaymentdate = new Date(dayjs(repaymentdate).month(repaymentMonth).add(8, 'hour'))
    //期初余额
    loanField.openingbalance = new BigNumber(loanInfo.loanamount).minus(new BigNumber(loanInfo.loanamount).dividedBy(numberperiods).multipliedBy(index - 1))
    //计划还款
    loanField.plannedrepayment = plannedrepayment
    //额外还款
    loanField.openingbalance = new BigNumber(loanInfo.loanamount).minus(new BigNumber(loanInfo.loanamount).dividedBy(numberperiods).multipliedBy(index - 1))
  }
  // plannedrepayment: new BigNumber(loanamount).dividedBy(numberperiods),//计划还款
  // additionalrepayment: 0,//额外还款
  // openingbalance: new BigNumber(loanamount).minus(new BigNumber(loanamount).dividedBy(numberperiods).multipliedBy(index - 1)),
  // accumulatedinterest: 30,  //先不计算（不会计算）
  // closingbalance: closingbalance,
  // loanstate: false,
}