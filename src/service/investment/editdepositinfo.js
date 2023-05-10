const {editDepositInfo}=require('@/mapper/investment/deposit.js')
module.exports=async(data)=>{
  let mapperResult=await editDepositInfo(data)
  if(mapperResult.modifiedCount!=0){
    return {
      state:true
    }
  }else{
    return {
      state:false
    }
  }
}