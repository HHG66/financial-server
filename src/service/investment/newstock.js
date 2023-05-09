
const { newStock } = require('@/mapper/investment/stock.js')
const { getAliaFundInfo } = require('@/service/other/thirdpartyapi.js')
const BigNumber = require('bignumber.js');

module.exports = async (ctx, next) => {
  let {
    stockcode,
    stockprice,//当前单价
    stocknum,
    operatingtime } = ctx
  let stockInfo = await getAliaFundInfo(stockcode, ctx)
  if (stockInfo.result !== true) {
    return {
      state: false,
      message: stockInfo.message || "股票信息获取失败",
    }
  }
  // console.log(stockInfo)
  let price = new BigNumber(stockprice).multipliedBy(stocknum)
  let mapperResult = await newStock({
    ...ctx,
    stockname:stockInfo.data[0].N,
    stockinfo: stockInfo.data[0]
  })
  if (mapperResult) {
    return {
      data: mapperResult,
      state: true
    }
  } else {
    return {
      state: false
    }
  }
}