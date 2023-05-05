const mongoose = require('mongoose')

const stock = new mongoose.Schema({
  stockcode:String,//股票代码
  stockprice:Number,//价格
  stocknum:Number,//数量
  operatingtime:String//操作时间
  
})

const Stock = mongoose.model('stock', stock)

module.exports = Stock