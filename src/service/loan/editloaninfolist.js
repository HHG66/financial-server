const { editloaninfolist, } = require('@/mapper/loan/index.js')
const dayjs = require('dayjs')
const BigNumber = require('bignumber.js');
const ObjectId = require('mongoose').Types.ObjectId;



module.exports = async (data) => {
  // let { loanid, repaymentdate, openingbalance, plannedrepayment, additionalrepayment, accumulatedinterest, principal, closingbalance, loanstate } = data

  if (isValidObjectId(data.loanid)) {
    let mapperRusult = await editloaninfolist(data)
    if (mapperRusult.modifiedCount != 0) {
      return {
        state: true
      }
    } else {
      return {
        state: false
      }
    }
  } else {
    return {
      state: false,
      message: '请求ID错误'
    }
  }
}

//两个（）是什么意思
function isValidObjectId(id) {
  if (ObjectId.isValid(id)) {
    if ((String)(new ObjectId(id)) === id)
      return true;
    return false;
  }
  return false;
}
