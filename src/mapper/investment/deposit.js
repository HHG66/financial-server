const Deposit = require('@/models/deposit/index.js')
const { add, updata, findOne, find, del } = require('../index')
const mongoose = require('mongoose')
module.exports = {
  newCertificateDeposit: (data) => {
    return add(Deposit, data)
  },
  editDepositInfo: (data) => {
    return updata(Deposit, {
      _id: data.id
    }, data)
  },
  getDepositList: (data) => {
    return find(Deposit,
     { ...data}
     , {
      __v: 0
    })
  },
  deletedepositinfo:(id)=>{
    return del(Deposit,{
      _id:id
    })
  }
}