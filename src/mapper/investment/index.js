/*
 * @Author: HHG
 * @Date: 2023-03-21 22:49:06
 * @LastEditTime: 2023-03-27 22:19:51
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
  //这个逻辑不正确，要改！
  sellingFund:(data)=>{
    return updata(Fund,{_id:data._id},{
      amount:data.sellingnumber,
      amountinvested:data.sellingprice,
    })
  }
}