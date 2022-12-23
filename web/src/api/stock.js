/*
 * @Author: HHG
 * @Date: 2022-12-22 14:28:11
 * @LastEditTime: 2022-12-22 14:44:59
 * @LastEditors: 韩宏广
 * @FilePath: \my-financial\web\src\api\stock.js
 * @文件说明: 
 */
import request from "./index";

export const getStockListApi=(params)=>{
  return request({
    url:'/getstocklist',
    method:'GET',
    params:{
      stockname:params.stockname,
      stockcode:params.stockcode
    }
  })
}