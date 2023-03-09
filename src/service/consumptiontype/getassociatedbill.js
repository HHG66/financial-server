const { getassociatedbill } = require('@mapper/consumptiontype/associatedbill')
module.exports = async (ctx, next) => {
  let result=[]
  let getassociatedbills = await getassociatedbill(ctx.query.consumptionname)
  getassociatedbills.forEach(element => {
    if(element.consumptionname.includes(ctx.query.consumptionname)){
      result.push(element)
    }
  });
  return result
}