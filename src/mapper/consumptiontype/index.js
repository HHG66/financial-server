const { Consumptiontype } = require('models/consumptiontype/type.js')
const { add, findOne, find } = require('../index.js')

//项目不大，mapper就不拆分了
module.exports = {
  //新增
  inserConsumptiontype: (data) => {
    let addBack = add(Consumptiontype, data)
    return addBack
  },
  findOneConsumptiontype: (name) => {
    return findOne(Consumptiontype, { consumptiontypename: name })
  }
  //获取
  getConsumptiontypeList: (name) => {
    return find(Consumptiontype, { consumptiontypename: name })
  }
}