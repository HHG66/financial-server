const serve=require('@/service/investment/editdepositinfo.js')
module.exports=async(ctx,next)=>{
  let result=await serve(ctx.request.body)
  if(result.state==true){
    response(ctx,{},{message:"编辑成功"})
  }else{
    response(ctx,{},{message:"编辑失败"})
  }
}