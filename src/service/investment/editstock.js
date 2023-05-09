const { editStock, stockInfo } = require("@/mapper/investment/stock.js")
const BigNumber = require('bignumber.js');

module.exports = async (ctx) => {
  let {
    stockid,
    stockstate,//加仓状态，1为加仓，0为减仓或者卖出
    number,//数量
    price,//价格
    operatingtime,//操作时间
  } = ctx
  let cost = new BigNumber(number).multipliedBy(price)
  let stockInfos = await stockInfo(stockid)
  let stocknum
  if (stockstate == 1) {
    //加仓
    stocknum = new BigNumber(stockInfos.stocknum).plus(number)
  } else if (stockstate == 0) {
    //减仓
    stocknum = new BigNumber(stockInfos.stocknum).minus(number)
  }
  //更新
  let mapperResult = await editStock({
    stockid,
    stockstate,
    stocknum,
    price, //第一次购买时候的价格
    cost,
    actions: {
        date:'shijian',
        info:'减仓股票'
     }
  })
  if (mapperResult) {
    return {
      state: true,
    }
  } else {
    return {
      state: false,
    }
  }
}