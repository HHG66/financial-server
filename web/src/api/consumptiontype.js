/*
 * @Author: HHG
 * @Date: 2022-09-13 19:16:40
 * @LastEditTime: 2022-09-13 21:29:42
 * @LastEditors: 韩宏广
 * @FilePath: /个人财务/web/src/api/consumptiontype.js
 * @文件说明: 
 */
import request from "./index";

export function getConsumptionTypeList(){
  return request({
    type:"get",
    url:'/getconsumptiontypelist',
    data:{}
  })
}