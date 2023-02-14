/*
 * @Author: HHG
 * @Date: 2023-02-14 16:00:07
 * @LastEditTime: 2023-02-14 20:27:33
 * @LastEditors: 韩宏广
 * @FilePath: /Personal-finance/src/models/consumptiontype/type.js
 * @文件说明: 
 */
const mongoose = require('mongoose')
const consumptiontype = new mongoose.Schema({
  consumptiontypename: String,
  createdate: Date,
})

const Consumptiontype = mongoose.model('consumptiontypes', consumptiontype)

module.exports = {
  Consumptiontype
}