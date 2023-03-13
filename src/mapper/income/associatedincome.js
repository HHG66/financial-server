/*
 * @Author: HHG
 * @Date: 2023-03-12 21:06:46
 * @LastEditTime: 2023-03-13 23:08:34
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/mapper/income/associatedincome.js
 * @文件说明: 
 */
const { AssociatedIncome } = require('@/models/income/associatedincome')
const { IncomeType } = require('@/models/income/incometype.js')
const { add, findOne, find, updata, del } = require('../index')
module.exports = {
  newAssociatedIncome: async (billincomename, incomenameid, remarks) => {
    let incomeType = await findOne(IncomeType, { _id: incomenameid })
    if (incomeType) {
      return add(AssociatedIncome, { billincomename: billincomename, incomtypenameid: incomeType._id, incomtypename: incomeType.incomename, remarks, createdate: new Date().toLocaleDateString() })
    } else {
      return 'err'
    }
  },
  getAssociatedIncome: (billincomename, remarks, incometypename) => {
    // console.log(data);
    // console.log(billincomename, remarks, incometypename);
    return find(AssociatedIncome, { $or: [{ billincomename: billincomename }, { remarks: remarks, }, { incometypename: incometypename }] }, { __v: 0, incomtypenameid: 0 })
  },
  editassociatedincome: (data) => {
    return updata(AssociatedIncome, data)
  },
  deleteassociatedincome: (_id) => {
    return del(AssociatedIncome, { _id })
  }
}