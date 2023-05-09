const mongoose = require('mongoose')

const stock = new mongoose.Schema({
  stockcode: String,//股票代码
  stockname:String,
  stockprice: Number,//价格
  stocknum: Number,//数量
  operatingtime: String,//操作时间
  stockinfo: mongoose.Schema.Types.Mixed,
  operatingrecord: {
    _ids: mongoose.Schema.Types.ObjectId,
    actions: [mongoose.Schema.Types.Mixed]
  }, //操作记录

})
// const childSchema = new mongoose.Types.ObjectId
// console.log(childSchema);
const Stock = mongoose.model('stock', stock)
module.exports = Stock