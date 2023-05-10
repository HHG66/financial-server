const {deleteStock}=require("@/mapper/investment/stock.js")
module.exports=async(id)=>{
  let mapperResult=await deleteStock(id)
  if(mapperResult){
    return {
      state:true,
    }
  }else{
    return {
      state:false
    }
  }
}