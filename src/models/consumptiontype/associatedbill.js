const mongoose = require('mongoose')
const associatedbill = new mongoose.Schema({
  consumptionname: String,
  consumptiontype: mongoose.Schema.Types.ObjectId,
  // class_id: {
  //   type: mongoose.Types.ObjectId,
  //   //关联字段
  //   ref: 'consumptiontypes'
  // },
  createdate: Date,
})

const Associatedbill = mongoose.model('associatedbills', associatedbill)

module.exports = {
  Associatedbill
}