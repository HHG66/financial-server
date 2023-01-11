/*
 * @Author: HHG
 * @Date: 2023-01-11 14:53:01
 * @LastEditTime: 2023-01-11 16:58:14
 * @LastEditors: 韩宏广
 * @FilePath: \financial\web\src\api\Summary.js
 * @文件说明: 
 */
import request from "./index";


export const getBillSummaryListApi = (params) => {
  if(params.tradingtime!==undefined&&params.tradingtime!==null){
    params.tradingtime= window.moment(params.tradingtime).format('YYYY-MM-DD')
  }
  return request({
    url: '/getbillsummarylist',
    method: 'GET',
    params: {
      billname: params.billname,
      tradingtime: params.tradingtime,
      amount: params.amount,
      counterparty: params.counterparty,
      associationtype: params.associationtype,
    }
  })
}