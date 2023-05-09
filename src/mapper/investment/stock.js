const Stock = require('@/models/stock/index.js')
const { add, updata, findOne } = require('../index')
const mongoose = require('mongoose')
// const childSchema = new mongoose.Types.ObjectId
// console.log(childSchema);
module.exports = {
  newStock: (data) => {
    return add(Stock, data, { __v: 0 })
  },
  editStock: (data) => {
    console.log(data.actions);
    return updata(Stock, {
      _id: data.stockid
    }, {
      stocknum: data.stocknum,
      $addToSet: {
        operatingrecord:{
          _ids: new mongoose.Types.ObjectId,
          actions: data.actions
        }
      }
    })
  },
  stockInfo: (id) => {
    return findOne(Stock, {
      _id: id
    })
  }
}