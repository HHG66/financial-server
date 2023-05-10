const { newCertificateDeposit } = require('@/mapper/investment/deposit')
module.exports = async (ctx) => {
  let { depositname, depositamount, depositinterest, deposittime, startdate, enddate } = ctx.request.body
  let mapperResult = await newCertificateDeposit({
    depositname, depositamount, depositinterest, deposittime, startdate, enddate
  })
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