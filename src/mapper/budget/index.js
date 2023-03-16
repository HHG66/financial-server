/*
 * @Author: HHG
 * @Date: 2023-03-14 19:59:34
 * @LastEditTime: 2023-03-15 23:52:23
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/mapper/budget/index.js
 * @文件说明: 
 */
const { add, findOne, find, updata, del } = require('../index.js')
const { Bill } = require('@/models/budget/index.js');
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
  getdisposebill: (date) => {
    if (date) {
      return find(Bill, { tradinghours: date })
    } else {
      return find(Bill, {},{__v:0})
    }
  },
  newfinancialrecord:()=>{
    
  }
}