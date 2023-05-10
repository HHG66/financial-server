const serve = require('@/service/investment/deletestock.js')
module.exports = async (ctx, next) => {
  let { stockid } = ctx.request.body
  let result = await serve(stockid)
  if(result.state==true){
    response(ctx,{},{message:'删除成功'})
  }else{
    response(ctx,{},{message:'删除失败'})
  }
}