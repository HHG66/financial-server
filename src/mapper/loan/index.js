const Loan = require('@/models/loan/index.js')
const { add, updata, findOne, find, del } = require('../index')

module.exports = {
  newLoan: (data) => {
    // console.log(data);
    return add(Loan, data)
  }
}