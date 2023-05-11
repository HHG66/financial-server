const { newLoan } = require('@/mapper/loan/index.js')
module.exports = async (data) => {
  let { loanname, loanamount, paymentmethod, interest, remainingpayments } = data
  let mapperResult = await newLoan({ loanname, loanamount, loanamount, paymentmethod, interest, remainingpayments })
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