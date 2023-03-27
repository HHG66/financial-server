/*
 * @Author: HHG
 * @Date: 2023-03-21 22:49:06
 * @LastEditTime: 2023-03-25 22:50:22
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/mapper/investment/index.js
 * @文件说明: 
 */
const mongoose = require('mongoose')
const Fund = require('@/models/fund/idnex.js');
const { add, find, del } = require('../index')
module.exports = {
  newfund: (data) => {
    console.log(data);
    return add(Fund, data)
  },
  getpositionfundslist: (data) => {
    console.log(data);
    return find(Fund, { $or: [{ fundname: data.fundname }, { buydate: data.buydate }, { saledate: data.saledate }] }, { __v: 0 })
  },
  deletefund: (data) => {
    return del(Fund, { _id: data.fundid })
  }
}