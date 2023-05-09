const {getStockList} =require('@/mapper/investment/stock.js')
module.exports=async(ctx,next)=>{
  console.log(ctx.query)
    
    
  if(ctx.query.stockname){
    let mapperResult=await getStockList()
  } 
  return {
    state:true,
    data:{}
  }
}