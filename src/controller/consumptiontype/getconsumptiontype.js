const getconsumptiontype = require('@service/consumptiontype/getconsumptiontype.js')

module.exports = async (ctx, next) => {
  let respond = []
  //获取参数
  let { consumptiontypename } = ctx.query;
  //处理参数
  ctx.query = consumptiontypename ? { consumptiontypename: consumptiontypename } : { consumptiontypename: '' }

  //业务层处理
  let serviceResult = await getconsumptiontype(ctx, next)
  //没做分页，这个类型不多，先不做分页
  serviceResult.forEach(element => {
    respond.push({
      name: element.consumptiontypename,
      remarks: element.remark,
      id: element._id
    })
  });
  response(ctx, respond)
}
