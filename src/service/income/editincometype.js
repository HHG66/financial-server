const { editIncomeType } = require('@/mapper/income/index.js')
module.exports = async (ctx, next) => {
  let {_id,incomename,remarks}=ctx.request.body
  let serverResult = await editIncomeType(_id,incomename,remarks,new Date().toLocaleDateString())
  console.log(serverResult);
  return serverResult
}