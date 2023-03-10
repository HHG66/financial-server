const server= require('@/service/income/editincometype.js')
module.exports = async (ctx, next) => {
  let { incomeId, incomename, remarks } = ctx.request.body
  ctx.request.body = {
    _id: incomeId,
    incomename,
    remarks
  }
  let resule = await server(ctx, next)
  if(resule){
    response(ctx,{},{message:"修改成功"})
  }else{
    response(ctx,{},{message:'修改失败'})
  }

}