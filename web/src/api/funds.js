import request from './index.js'

export const getPositionFundsListApi=(params)=>{
  return request({
    url:"/getpositionfundslist",
    method:'GET',
    params:{
      fundname:params.fundname
    }
  })
}