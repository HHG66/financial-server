/*
 * @Author: HHG
 * @Date: 2023-03-27 11:31:02
 * @LastEditTime: 2023-03-27 22:21:58
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/service/investment/editfundinfo.js
 * @文件说明: 
 */
const {sellingFund}=require('@/mapper/investment/index.js')
module.exports = async (data) => {
  //加仓基金做不动了，逻辑也不对，要在原本的数量上面增加或者减少。
  let { _id, fundstate, sellingnumber, sellingprice, addnumber, price } = data
  if (fundstate === '卖出') {
    let mappperResult = await sellingFund({_id,sellingnumber, sellingprice})
  }
}