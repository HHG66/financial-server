/*
 * @Author: HHG
 * @Date: 2023-03-20 21:21:40
 * @LastEditTime: 2023-03-20 22:22:37
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/service/budget/getinportbillinfo.js
 * @文件说明: 
 */
const { getinportbillinfo } = require('@/mapper/budget/index.js')
const ObjectId = require('mongoose').Types.ObjectId;
module.exports = async (id) => {
  let serveResule = {}
  let totalrevenue = 0
  let totalconsumption = 0
  if (!ObjectId.isValid(id)) {
    return {
      state:'err',
      message:'请选择正确的批次数据'
    }
  }
  const mapperResult = await getinportbillinfo(id)
  if (mapperResult) {
    mapperResult.forEach(element => {
      element.amount = element.amount.replace(',', '')
      console.log(parseFloat(element.amount.substring(1)));
      if (element.collectorbranch == "支出") {
        totalconsumption += parseFloat(element.amount.substring(1))
      } else {
        totalrevenue += parseFloat(element.amount.substring(1))
      }
    });
    console.log('totle', totalrevenue + totalconsumption);
    serveResule = {
      businesstotal: mapperResult.length,
      totalrevenue: totalrevenue,
      totalconsumption: totalconsumption
    }
  }

  return serveResule
}