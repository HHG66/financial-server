const { editStock, stockInfo } = require("@/mapper/investment/stock.js")
const BigNumber = require('bignumber.js');
var dayjs = require('dayjs')
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
    let underweight = new BigNumber(stockInfos.stocknum).minus(number)
    if (underweight < 0) {
      return {
        state: false,
        message: '超过持仓数量'
      }
    } else {
      stocknum = underweight
    }
  }

  //更新
  let mapperResult = await editStock({
    stockid,
    stockstate,
    stocknum,
    price, //第一次购买时候的价格
    cost,
    //操作记录
    actions: {
      number: 100,
      state: stockstate,
      info: stockstate == 1 ? '加仓股票' : '减仓股票',
      date: new Date(dayjs(new Date()).add(8, 'hour'))
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