/*
 * @Author: HHG
 * @Date: 2023-03-14 19:59:34
 * @LastEditTime: 2023-03-20 22:19:30
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/mapper/budget/index.js
 * @文件说明: 
 */
const { add, findOne, find, updata, del } = require('../index.js')
// bill是导入的账单字段，信息比较全面。
const { Bill } = require('@/models/budget/index.js');
//是基础的账单字段信息
const { Check } = require('@/models/bills/index.js');
const Batch = require('@/models/budget/batch.js')
module.exports = {
  //这里的异步没有学明白，无法返回这个num的值
  importingbills: async (data) => {
    let num = 0
    data.forEach(async element => {
      let searchData = await findOne(Bill, { trasactionid: element.trasactionid })
      // console.log(searchData);
      // console.log(!searchData);
      if (!searchData) {
        let addDoc = await add(Bill, element)
        // console.log("addDoc", addDoc);
        if (addDoc) {
          num = num + 1
        }
      }
    });

    return data.length
  },
  addBatchInfo: () => {
    //批次信息
    return add(Batch, { batchname: new Date().toLocaleDateString() + '导入的账单', importtime: new Date().toLocaleString() })
  },
  getdisposebill: (date) => {
    if (date) {
      return find(Bill, { tradinghours: { $eq: date } })
    } else {
      return find(Bill, {}, { __v: 0 })
    }
  },
  newfinancialrecord: (fileds) => {
    return add(Check, fileds)
  },
  getType: (schema, _id,) => {
    return findOne(schema, { _id: _id })
  },
  getperiodtimebill: (startDate, endDate) => {
    return find(Check, { date: { $gte: startDate, $lte: endDate } }, { __v: 0 })
  },
  getbalancepayments: (date) => {
    return findOne(Check, { date: { $eq: date } }, { __v: 0 })
  },
  getimportrecords: (starttime, endtime) => {
    if (starttime && endtime) {
      return find(Batch, { importtime: { $gte: starttime, $lte: endtime } }, { __v: 0 })
    } else if (!starttime && !endtime) {
      return find(Batch, {}, { __v: 0 })
    } else if (starttime && !endtime) {
      return find(Batch, { importtime: { $gte: starttime } }, { __v: 0 })
    } else {
      return find(Batch, { importtime: { $lte: endtime } }, { __v: 0 })
    }
  },
  getinportbillinfo: (id) => {
    return find(Bill, { batchid: id }, { __v: 0 })
  }
}