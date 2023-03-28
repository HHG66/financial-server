/*
 * @Author: HHG
 * @Date: 2023-03-27 11:31:02
 * @LastEditTime: 2023-03-28 10:03:37
 * @LastEditors: 韩宏广
 * @FilePath: \financial\src\service\investment\editfundinfo.js
 * @文件说明: 
 */
const { sellingFund, getFundInfo } = require('@/mapper/investment/index.js')
module.exports = async (data) => {
  let mappperResult
  //加仓基金做不动了，逻辑也不对，要在原本的数量上面增加或者减少。
  let { _id, fundstate, sellingnumber, sellingprice, addnumber, price } = data
  if (fundstate === '1') {
    let fundInfo = await getFundInfo(_id)
    
    console.log(fundInfo);
    
    mappperResult = await sellingFund({ _id, sellingnumber, sellingprice, fundstate: [1] })
  } else {
    // mappperResult = await sellingFund({ _id, sellingnumber, sellingprice })
  }
}