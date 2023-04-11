/*
 * @Author: HHG
 * @Date: 2023-04-03 21:53:10
 * @LastEditTime: 2023-04-11 18:09:16
 * @LastEditors: 韩宏广
 * @FilePath: \server\src\service\investment\getfundnetworth.js
 * @文件说明: 
 */
const http = require('node:http')
const qs = require('querystring');
const { getfundnetworth } = require('@/mapper/investment/index.js')
const { getTianFundDetails } = require('@/service/other/thirdpartyapi.js')


module.exports = async (fundid, fundcode) => {
  let serveResult = await getTianFundDetails(fundcode)
  // console.log(serveResult);
  if (serveResult.result == true) {
    const mapperResult = await getfundnetworth(fundid,serveResult.data)
    if(mapperResult){
      return {
        state:true
      }
    }
  } else {
    return serveResult.data
  }

}
