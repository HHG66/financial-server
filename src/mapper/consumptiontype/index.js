const { Consumptiontype } = require('models/consumptiontype/type.js')
const { add,findOne } = require('../index.js')

module.exports = {
  inserConsumptiontype: (data) => {
    let addBack = add(Consumptiontype, data)
    return addBack
  },
  findOneConsumptiontype:(name)=>{
   return findOne(Consumptiontype,{consumptiontypename:name})
  }
}