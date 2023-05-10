const Stock = require('@/models/stock/index.js')
const { add, updata, findOne, find, del } = require('../index')
const mongoose = require('mongoose')
// const childSchema = new mongoose.Types.ObjectId
// console.log(childSchema);
module.exports = {
  newStock: (data) => {
    return add(Stock, data, { __v: 0 })
  },
  editStock: (data) => {
    return updata(Stock, {
      _id: data.stockid
    }, {
      stocknum: data.stocknum,
      $addToSet: {
        operatingrecord: {
          _ids: new mongoose.Types.ObjectId,
          actions: data.actions,
        }
      }
    })
  },
  stockInfo: (id) => {
    return findOne(Stock, {
      _id: id
    })
  },
  getStockList: (data) => {
    return find(Stock,
      {
        $or:
          [{
            stockcode: data.stockcode,
          }, {
            stockname: data.stockname,
          }]
      }, {
      __v: 0,
      operatingrecord: 0,
      stockinfo: 0
    }
    )
  },
  deleteStock: (id) => {
    return del(Stock, {
      _id: id
    })
  }
}