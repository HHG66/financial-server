const serve = require('@/service/loan/newloan.js')
module.exports = async (ctx, next) => {
  let result = await serve(ctx.request.body)
  if(result.state==true){
    response(ctx,{},{message:'新增成功'})
  }else{
    response(ctx,{},{message:'新增失败'})
  }
}