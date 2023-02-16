const { newassociatedbill } = require('mapper/consumptiontype/associatedbill')
const { findOneConsumptiontypeFormId } = require('mapper/consumptiontype/index')
module.exports = async (ctx, next) => {
  let newResult
  let newassociatedbillData = {}
  // console.log( ctx.request.body);
  let { consumptionname, consumptiontypeid } = ctx.request.body
  let serchData = await findOneConsumptiontypeFormId({ _id: consumptiontypeid })
  if (serchData) {
    newassociatedbillData={
      consumptionname,
      consumptiontype:serchData._id,
      createdate:new Date()
    }
    newResult = await newassociatedbill(newassociatedbillData)
  } else {
    newResult=false
  }
  return newResult
}