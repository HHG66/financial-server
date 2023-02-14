
const newconsumptiontype = require('service/consumptiontype/newconsumptiontype.js')
const mapper = require('mapper/consumptiontype/index.js');

module.exports = async (ctx, next) => {

  //获取参数
  let { consumptiontype } = ctx.request.body;
  //处理参数
  if (typeof consumptiontype == 'string') {
    ctx.request.body = { consumptiontypename: consumptiontype }
  } else {
    response(ctx, {}, { message: '请输入字符串' })
  }
  //业务层处理
  let serviceResult = await newconsumptiontype(ctx, next)
  console.log(serviceResult);
  if (serviceResult.state === 0 || serviceResult.state === 3) {
    response(ctx, {}, { code: "00001", message: serviceResult.message })
  } else if (serviceResult.state === 1) {
    response(ctx, {}, { code: "00000" })
  }

}
