/*
 * @Author: HHG
 * @Date: 2023-03-27 11:31:02
 * @LastEditTime: 2023-04-24 18:25:33
 * @LastEditors: 韩宏广
 * @FilePath: \server\src\service\investment\editfundinfo.js
 * @文件说明: 
 */
const { sellingFund, getFundInfo } = require('@/mapper/investment/index.js')
const { add, multiply, fraction } = require('mathjs')


module.exports = async (data) => {
  let mappperResult
  //加仓基金做不动了，逻辑也不对，要在原本的数量上面增加或者减少。
  let { _id, fundstate, sellingnumber, sellingprice, addnumber, price } = data
  if (fundstate === '1') {
    //查找数据库中持仓基金
    let fundInfo = await getFundInfo(_id)
    //计算卖出后数量
    let sellingprices = fraction(subtract(fundInfo[0].amountinvested) - multiply(sellingprice, sellingprice))


    let sellingnumbers = Number(fundInfo[0].amount) - Number(sellingnumber)
    let fundstates = [...fundInfo[0].fundstate]
    fundstates.push("卖出")
    mappperResult = await sellingFund(_id, sellingnumbers, sellingprices, fundstates)

    //逻辑:
    //1、获取前端传值，卖出（赎回）数量、卖出（赎回）价格、操作时间、
    //2、计算，赎回净值=卖出数量*卖出价格-（卖出数量*赎回费率），净收益=成本-赎回净值
    //注：卖出价格可以通过基金的当天时间获取
    //3、更新相关字段信息
  } else {
    // mappperResult = await sellingFund({ _id, sellingnumber, sellingprice })
  }
}