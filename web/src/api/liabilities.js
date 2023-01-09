/*
 * @Author: HHG
 * @Date: 2023-01-09 09:00:40
 * @LastEditTime: 2023-01-09 09:03:05
 * @LastEditors: 韩宏广
 * @FilePath: \financial\web\src\api\liabilities.js
 * @文件说明: 
 */
import request from './index.js'

export const getLoanListApi=(params)=>{
  return request({
    url:'/getloanlist',
    method:'GET',
    params:{
      
    }
  })
}

export const getLoanInfoListApi=(params)=>{
  return request({
    url:"/getloaninfolist",
    method:'GET',
    params:{

    }
  })
}