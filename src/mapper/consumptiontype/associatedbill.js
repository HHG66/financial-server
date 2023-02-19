const { Associatedbill } = require('@models/consumptiontype/associatedbill.js')
// const { Consumptiontype } = require('models/consumptiontype/type.js')
const { add, findOne, find, updata, del } = require('../index.js')

module.exports = {
  //新建关联消费类型，和账单名称关联
  newassociatedbill: (data) => {
    return add(Associatedbill, data)
  },
  // getassociatedbill: (consumptionname) => {
  //   if (consumptionname === "") {
  //     return find(Associatedbill, {})
  //   } else {
  //     return find(Associatedbill, { consumptionname: consumptionname })
  //   }
  // },
  getassociatedbill: (consumptionname) => {
    return Associatedbill.aggregate([
      {
        $lookup:
        {
          from: "consumptiontypes",
          localField: "consumptiontype",
          foreignField: "_id",
          as:"consumptiontypes"
        }
      },
    ])
  }
}