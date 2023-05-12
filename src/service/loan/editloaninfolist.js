const { editloaninfolist, getLoanInfoList } = require('@/mapper/loan/index.js')
const dayjs = require('dayjs')
const BigNumber = require('bignumber.js');
const ObjectId = require('mongoose').Types.ObjectId;

module.exports = async (data) => {
  // let { loanid, repaymentdate, openingbalance, plannedrepayment, additionalrepayment, accumulatedinterest, principal, closingbalance, loanstate } = data

  if (isValidObjectId(data.loanid)) {
    let loanInfoList = await getLoanInfoList(data.loanid)
    // console.log(loanInfoList[0]);
    // console.log(loanInfoList[0].loanstaging);
    let loanstaging = []
    if (loanInfoList.length > 0) {
      loanInfoList[0].loanstaging.forEach(element => {
        if (element.numberindex == data.numberindex) {
          loanstaging.push({
            numberindex: Number(data.numberindex),
            repaymentdate:new Date(data.repaymentdate),
            plannedrepayment: data.plannedrepayment,
            additionalrepayment: data.additionalrepayment,
            openingbalance: data.openingbalance,
            accumulatedinterest: data.accumulatedinterest,
            closingbalance: data.closingbalance,
            loanstate: Boolean(data.loanstate),
          })
        } else {
          loanstaging.push(element)
        }
      });
    }

    let mapperRusult = await editloaninfolist(data.loanid,loanstaging)
    // console.log(mapperRusult);
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
