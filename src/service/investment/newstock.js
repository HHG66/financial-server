
const { newStock } = require('@/mapper/investment/stock.js')
const BigNumber = require('bignumber.js');

module.exports = async (ctx, next) => {
  let {
    stockcode,
    stockprice,//当前单价
    stocknum,
    operatingtime } = ctx

  let price = new BigNumber(stockprice).multipliedBy(stocknum)
  let mapperResult = await newStock(ctx)
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