const server=require('@/service/income/getincometypelist.js')
module.exports=async(ctx,next)=>{
  //处理参数
  let {incometypename}=ctx.query
  if(incometypename==null){
    ctx.query={
      incometypename:""
    }
  }
  let serveResult=await server(ctx,next)
  response(ctx,serveResult)
}