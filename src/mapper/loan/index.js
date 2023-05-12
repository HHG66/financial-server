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
  editloaninfolist: (data) => {
    return updata(Loan, {
      _id: data.loanid
    }, {
      ...data
    })
  }
}