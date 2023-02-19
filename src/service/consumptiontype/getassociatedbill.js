const { getassociatedbill } = require('@mapper/consumptiontype/associatedbill')
module.exports = async (ctx, next) => {
  let getassociatedbills = await getassociatedbill(ctx.query.consumptionname)
  return getassociatedbills
}