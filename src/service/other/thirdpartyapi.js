/*
 * @Author: HHG
 * @Date: 2023-04-10 17:04:47
 * @LastEditTime: 2023-04-10 23:35:46
 * @LastEditors: 韩宏广
 * @FilePath: /server/src/service/other/thirdpartyapi.js
 * @文件说明: 
 */
const http = require('node:http')
const qs = require('querystring');
module.exports = {
  //天天基金净值接口
  getTianFundDetails: async (fundcode) => {
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
          try {
            eval(content.substring(38))
            resolve({
              result: true, data: {
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
              }
            });
          } catch (error) {
            return {
              state: false,
              message: "基金信息错误，请检查基金代码"
            }
          }
        });

      })
      req.on('error', function (err) {
        console.log(err);
        resolve({ result: false, errmsg: err.message });
      });
      req.end();
    })
  },
  getTianFundLists: () => {
    return new Promise((resolve, reject) => {
      let body_request = {
        hostname: 'fund.eastmoney.com',
        path: "/js/fundcode_search.js",
        method: "GET",
        port: 80,
      }
      let content = ''
      let req = http.request(body_request, res => {
        res.setEncoding('utf-8');
        res.on('data', (chunk) => {
          content += chunk;
          // console.log(chunk);
          // console.log();
        });
        res.on('end', () => {
          try {
            // console.log(JSON.stringify(content));
            //执行完成之后前面有一个undefined
            eval(content)
            resolve({
              result: true, data: { r }
            });
          } catch (error) {
            console.log(error);
            return {
              state: false,
              message: "更新基金列表失败"
            }
          }
        });
      })
      req.on('error', function (err) {
        console.log(err);
        resolve({ result: false, errmsg: err.message });
      });
      req.end();
    })
  }
}