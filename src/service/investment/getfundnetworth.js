/*
 * @Author: HHG
 * @Date: 2023-04-03 21:53:10
 * @LastEditTime: 2023-04-06 22:31:36
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/service/investment/getfundnetworth.js
 * @文件说明: 
 */
const { getfundnetworth } = require('@/mapper/investment/index.js')
const http = require('node:http')
const qs = require('querystring');

module.exports = async (fundid, fundcode) => {
  // const mapperResult = await getfundnetworth(fundid)
  let serveResult = await getTianFundDetails(fundcode, fundid).then(res => {
    try {
      eval(res.data.substring(38))
      return {
        state: true,
      }
    } catch (error) {
      return {
        state: false,
        message: "基金信息错误，请检查基金代码"
      }
    }
    getfundnetworth(fundid, {
      fS_name,//基金或股票信息
      fS_code,
      fund_minsg,
      ishb,
      fund_sourceRate,//原费率
      fund_Rate,//现费率
      fund_minsg,//最小申购金额
      syl_1n,//近一年收益率
      syl_3y,//近三月收益率
      syl_6y,//近6月收益率
      syl_1y,//近一月收益率
      Data_assetAllocationCurrency,//资产配置
      Data_grandTotal,//累计收益率走势
      Data_rateInSimilarType,//同类排名
      Data_rateInSimilarPersent,//百分比排名
      Data_sevenDaysYearIncome,//7日年化收益率
      Data_millionCopiesIncome,//每万份收益
      Data_fluctuationScale,//规模变动
      Data_holderStructure,//持有人结构
      Data_assetAllocation,//申购赎回
      Data_currentFundManager,//现任基金经理
      swithSameType,//同类型基金涨幅榜（页面底部通栏)
    })
  })
  return serveResult
}

const getTianFundDetails = (fundcode, fundid) => {
  return new Promise(function (resolve, reject) {
    let body_request = {
      hostname: 'fund.eastmoney.com',
      path: "/pingzhongdata/" + fundcode + '.js',
      method: "GET",
      port: 80,
      headers: {
        // "Accept": "application/json",
        // "Content-Type": "application/json;charset=UTF-8",
      },
    }
    let content
    let req = http.request(body_request, (res) => {
      res.setEncoding('utf-8');
      res.on('data', (chunk) => {
        content += chunk;
      });
      res.on('end', () => {
        resolve({ result: true, data: content });
      });

    })
    req.on('error', function (err) {
      console.log(err);
      resolve({ result: false, errmsg: err.message });
    });
    req.end();
  })

}