/*
 * @Author: HHG
 * @Date: 2023-03-21 22:49:06
 * @LastEditTime: 2023-04-03 22:55:05
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/mapper/investment/index.js
 * @文件说明: 
 */
const mongoose = require('mongoose')
const Fund = require('@/models/fund/idnex.js');
const { add, find, del, updata } = require('../index')
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
  },
  getFundInfo: (_id) => {
    return find(Fund, { _id: _id }, { __v: 0 })
  },
  //这个逻辑不正确，要改！
  sellingFund: (_id, sellingnumber, sellingprice, fundstate) => {
    return updata(Fund, { _id: _id }, {
      amount: sellingnumber,
      amountinvested: sellingprice,
      fundstate: fundstate
    })
  },
  getfundnetworth: (_id, data) => {
    return updata(Fund, { _id: _id }, {
      fundnetworth: data
    })
  }
}