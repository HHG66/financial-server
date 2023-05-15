const Loan = require('@/models/loan/index.js')
const { add, updata, findOne, find, del } = require('../index')

module.exports = {
  newLoan: (data) => {
    // console.log(data);
    return add(Loan, data)
  },
  getLoanList: () => {
    return find(Loan, {}, {
      info: 0,
      loanstaging: 0,
      __v: 0
    })
  },
  getLoanInfoList: (_id) => {
    return find(Loan, {
      _id
    }, {
      info: 0,
    })
  },
  deleteLoan: (_id) => {
    return del(Loan, {
      _id
    })
  },
  getLoanLnfo: (_id) => {
    return find(Loan, {
      _id
    }, {
      __v: 0,
      loanstaging: 0
    })
  },
  editloaninfolist: (loanid, data) => {
    // console.log(data.loanid);
    // console.log(data);
    return updata(Loan, {
      _id: loanid
    }, {
      loanstaging: data
    })
  },
  editLoanInfo: (data) => {
    let { loanid, loanname, paymentmethod, ...info } = data
    // console.log(info);
    return updata(Loan, {
      _id: loanid
    }, {
      loanname,
      paymentmethod,
      info: {
        phaseonedate, thenumberrepaymentsperyear, annualinterestrate, interest, numberperiods
      }
    })
  }
}