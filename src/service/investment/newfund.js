/*
 * @Author: HHG
 * @Date: 2023-03-21 22:42:18
 * @LastEditTime: 2023-04-11 11:26:43
 * @LastEditors: 韩宏广
 * @FilePath: \server\src\service\investment\newfund.js
 * @文件说明: 
 */
const { newfund, getFundType, getpositionfundslist } = require('@/mapper/investment/index.js')
const { getTianFundDetails } = require('@/service/other/thirdpartyapi.js')

module.exports = async (ctx) => {
  let mapperData = {}
  let fundInfo
  // console.log(ctx.request.body);
  //新增关键基础信息，查询对应的基金其他详细信息
  console.log('---');
  let fundTypeInfo = await getFundType(ctx.request.body.fundcode)
  if (fundTypeInfo.length > 0) {
    fundInfo = await getTianFundDetails(ctx.request.body.fundcode)
  } else {
    return false
  }
  //查询持仓基金，计算相关信息
  let positionFundsList = await getpositionfundslist({})
  let fundAmount = 0
  positionFundsList.forEach(element => {
    fundAmount += element.amountinvested
  });
  mapperData = {
    ...ctx.request.body,
    plate: fundTypeInfo[0].fundtype,
    proportionpositionsheld: Number(ctx.request.body.amountinvested) / (fundAmount + Number(ctx.request.body.amountinvested)),//基金内部持仓占比
    positionratio:0, //基金占总投资金额占比，比较复杂需要后面几个投资模块完成之后回来计算
    // currentprice:
    fundnetworth: fundInfo.data,//净值信息
  }
  let mapperResult = await newfund(mapperData)
  // console.log(mapperResult);
  return mapperResult
}