const Stock = require('@/models/stock/index.js')
const { add } = require('../index')
module.exports = {
  newStock: (data) => {
    return add(Stock, data,{__v:0})
  }
}