const getconsumptiontype = require('service/consumptiontype/getconsumptiontype.js')
const mapper = require('mapper/consumptiontype/index.js');

module.exports = async (ctx, next) => {

  //获取参数
  // let { consumptiontypename } = ctx.query;
  //处理参数
 
  //业务层处理
  let serviceResult =  getconsumptiontype(ctx, next)
  console.log(serviceResult);
  response(ctx,{})
}
