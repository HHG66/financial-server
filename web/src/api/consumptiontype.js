/*
 * @Author: HHG
 * @Date: 2022-09-13 19:16:40
 * @LastEditTime: 2022-10-06 11:15:59
 * @LastEditors: 韩宏广
 * @FilePath: /个人财务/web/src/api/consumptiontype.js
 * @文件说明: 
 */
import request from "./index";

export function getConsumptionTypeList(searchData){
  return request({
    method:'POST',
    url:'/getconsumptiontypelist',
    data:{
      consumptiontypename:searchData.consumptionName||""
    }
  })
}

export function newConsumptionType(consumptiontype){
  return request({
    method:'POST',
    url:'/newconsumptiontype',
    data:{
      consumptiontype:consumptiontype.consumptionName
    }
  })
}

export function newAssociatedBillName(data){
  return request({
    method:'POST',
    url:'/newassociatedbillname',
    data:{
      consumptionName:data.consumptionName,
      consumptiontype:data.consumptiontype
    }
  })
}

export function getassociatedbill(data){
  return request({
    method:'GET',
    url:'/getassociatedbill',
    params:{
      consumptionName:data.consumptionName,
      consumptiontype:data.consumptiontype
    }
  })
}
//编辑关联消费账单名称
export function editAssociatedBill(data){
  console.log(data);
  return request({
    method:'POST',
    url:'/editassociatedbill',
    data:{
      id:data.editAssociatedBillId,
      consumptionname:data.values.consumptionName,
      consumptiontype:data.values.consumptiontype
    }
  })
}
//删除关联消费账单名称
export function deleteAssociatedBill(id){
  return request({
    method:'POST',
    url:'/editassociatedbill',
    params:{
      id:id,
    }
  })
}
