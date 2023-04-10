/*
 * @Author: HHG
 * @Date: 2023-04-03 21:53:10
 * @LastEditTime: 2023-04-10 17:50:45
 * @LastEditors: 韩宏广
 * @FilePath: \server\src\service\investment\getfundnetworth.js
 * @文件说明: 
 */
const http = require('node:http')
const qs = require('querystring');
const { getfundnetworth } = require('@/mapper/investment/index.js')
const { getTianFundDetails } = require('@/service/other/thirdpartyapi.js')


module.exports = async (fundid, fundcode) => {
  // const mapperResult = await getfundnetworth(fundid)
  let serveResult = await getTianFundDetails(fundcode)
  if(serveResult.result==true){
    return serveResult
  }else{
    return serveResult.data
  }
  
}
