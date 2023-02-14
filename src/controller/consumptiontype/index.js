
const consumptiontypeServe = require('service/consumptiontype/index.js')
const mapper = require('mapper/consumptiontype/index.js');

module.exports = async (ctx, next) => {

  //获取参数
  let { consumptiontypename } = ctx.request.body;
  //处理参数
  if (typeof consumptiontypename == 'string') {
    ctx.request.body = { consumptiontypename }
  } else {
    response(ctx, {}, { message: '请输入字符串', desc='error' })
  }
  //业务层处理
  let consumptiontypeServes = await consumptiontypeServe(ctx, next)
  //响应
  response(ctx, {})


}
