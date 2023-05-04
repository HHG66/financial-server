/*
 * @Author: HHG
 * @Date: 2023-03-27 11:31:02
 * @LastEditTime: 2023-04-30 23:11:43
 * @LastEditors: 韩宏广
 * @FilePath: /server/src/service/investment/editfundinfo.js
 * @文件说明: 
 */
const BigNumber = require('bignumber.js');
const { sellingFund, getFundInfo } = require('@/mapper/investment/index.js')
module.exports = async (data) => {
  let mappperResult
  let { _id, fundstate, sellingnumber, sellingprice, addnumber, price } = data
  let fundInfo = await getFundInfo(_id)
  if (fundstate === '1') {
    fundstates.push("卖出")
    let sellingprices = new BigNumber(fundInfo[0].amountinvested).minus(sellingprice)
    let sellingnumbers = new BigNumber(fundInfo[0].amount).minus(sellingnumber)
    let fundstates = [...fundInfo[0].fundstate]
    mappperResult = await sellingFund(_id, sellingnumbers, sellingprices, fundstates)
    return mappperResult
    //逻辑:
    //1、获取前端传值，卖出（赎回）数量、卖出（赎回）价格、操作时间、
    //2、计算，赎回净值=卖出数量*卖出价格-（卖出数量*赎回费率），净收益=成本-赎回净值
    //注：卖出价格可以通过基金的当天时间获取
    //3、更新相关字段信息
  } else {
    let sellingprices = new BigNumber(fundInfo[0].amountinvested).plus(sellingprice)
    let sellingnumbers = new BigNumber(fundInfo[0].amount).plus(sellingnumber)
    let fundstates = [...fundInfo[0].fundstate]
    mappperResult = await sellingFund(_id, sellingnumbers, sellingprices, fundstates)
    return mappperResult
  }
}