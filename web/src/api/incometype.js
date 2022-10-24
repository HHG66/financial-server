/*
 * @Author: HHG
 * @Date: 2022-10-22 20:33:04
 * @LastEditTime: 2022-10-23 20:46:46
 * @LastEditors: 韩宏广
 * @FilePath: /个人财务/web/src/api/incometype.js
 * @文件说明: 
 */
import request from './index.js'

export const newIncometype = (data) => {
  return request({
    method: 'POST',
    url: '/newincometype',
    data: {
      incomename: data
    }
  })
}

export const deleteIncomeType = (id) => {
  return request({
    method: 'POST',
    url: '/deleteincometype',
    data: {
      incometypeid: id
    }
  })
}

export const getIncomeTypeList = (searchform) => {
  return request({
    method: 'GET',
    url: '/getincometypelist',
    data: {
      incometypename: searchform.incomename
    }
  })
}
