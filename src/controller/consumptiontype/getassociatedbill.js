const getassociatedbill = require('@service/consumptiontype/getassociatedbill.js')

module.exports = async (ctx, next) => {
  let respond = []
  //获取参数
  let { consumptionname } = ctx.query;
  //处理参数，注意，query参数不允许设置引用类型，所以，这个返回“” 在mapper层处理
  ctx.query = (consumptionname) ? { consumptionname: consumptionname } : { consumptionname: '' }
  //业务层处理
  let serviceResult = await getassociatedbill(ctx, next)
  serviceResult.forEach(element => {
    respond.push({
      consumptionname:element.consumptionname,
      consumptiontype:element.consumptiontypes[0].consumptiontypename,
      key:element._id,
      // consumptiontype:
    })
  });
  response(ctx, respond)
}
