const { editconsumptiontype } = require('mapper/consumptiontype/index')
module.exports = async (ctx, next) => {
  let result = await editconsumptiontype(ctx.request.body)
  return result
}