const { Consumptiontype } = require('models/consumptiontype/type.js')
const { add, findOne, find, updata, del } = require('../index.js')

//项目不大，mapper就不拆分了
module.exports = {
  //新增
  inserConsumptiontype: (data) => {
    let addBack = add(Consumptiontype, data)
    return addBack
  },
  findOneConsumptiontype: (name) => {
    return findOne(Consumptiontype, { consumptiontypename: name })
  },
  //获取
  getConsumptiontypeList: (name) => {
    return find(Consumptiontype, { consumptiontypename: name }, { __v: 0 })
  },
  getAllConsumptiontypeList: () => {
    return find(Consumptiontype, {}, { __v: 0 })
  },
  editconsumptiontype: (data) => {
    return updata(Consumptiontype, { _id: data._id }, data)
  },
  deleteconsumptiontype: (data) => {
    return del(Consumptiontype,{_id:data._id})
  }
}