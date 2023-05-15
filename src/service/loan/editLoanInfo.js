const { editLoanInfo } = require('@/mapper/loan/index.js')
module.exports = async (data) => {
  let { loanid, loanname, paymentmethod, phaseonedate, thenumberrepaymentsperyear, annualinterestrate, interest, numberperiods } = data

  let mapperResult = await editLoanInfo({
    loanid, loanname, paymentmethod, phaseonedate, thenumberrepaymentsperyear, annualinterestrate, interest, numberperiods
  })
  if (mapperResult.modifiedCount != 0) {
    return {
      state: true,
    }
  } else {
    return {
      state: false,
    }
  }
}