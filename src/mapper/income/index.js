/*
 * @Author: HHG
 * @Date: 2023-03-08 21:18:02
 * @LastEditTime: 2023-03-08 21:48:52
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/mapper/income/index.js
 * @文件说明: 
 */
const { IncomeType } = require('@models/income/incometype.js')
// const { Consumptiontype } = require('models/consumptiontype/type.js')
const { add, findOne, find, updata, del } = require('../index.js')

module.exports = {
  addincometype: (incomename, remarks) => {
    console.log(new Date().toLocaleString());
    return add(IncomeType, { incomename, remarks, createdate:new Date().toLocaleString()})
  }
}