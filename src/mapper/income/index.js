/*
 * @Author: HHG
 * @Date: 2023-03-08 21:18:02
 * @LastEditTime: 2023-03-16 23:03:16
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/mapper/income/index.js
 * @文件说明: 
 */
const { IncomeType } = require('@models/income/incometype.js')
// const { Consumptiontype } = require('models/consumptiontype/type.js')
const { add, findOne, find, updata, del } = require('../index.js')

module.exports = {
  addincometype: (incomename, remarks) => {
    // console.log(new Date().toLocaleString());
    return add(IncomeType, { incomename, remarks, createdate: new Date().toLocaleString() })
  },
  getIncomeTypeList: (incometypename) => {
    if (incometypename == '') {
      return find(IncomeType, {}, { __v: 0 })
    } else {
      return find(IncomeType, { incomename: incometypename }, { __v: 0 })
    }
  },
  editIncomeType: (_id, incomename, remarks, date) => {
    return updata(IncomeType, { _id: _id }, { incomename: incomename, remarks: remarks, createdate: date })
  },
  deleteincometype: async (_id) => {
    return del(IncomeType, { _id })
  }
}