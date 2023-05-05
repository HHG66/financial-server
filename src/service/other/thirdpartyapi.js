/*
 * @Author: HHG
 * @Date: 2023-04-10 17:04:47
 * @LastEditTime: 2023-05-05 11:18:54
 * @LastEditors: 韩宏广
 * @FilePath: \server\src\service\other\thirdpartyapi.js
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
      let content = ''
      let req = http.request(body_request, (res) => {
        res.setEncoding('utf-8');
        res.on('data', (chunk) => {
          content += chunk;
        });
        res.on('end', () => {
          try {
            // eval(content.substring(38))
            // 匹配有效数据部分
            const regex = /var\s+(\w+)\s*=\s*([^;]+);/g;
            const matches = [];
            let match;
            while (match = regex.exec(content.substring(38))) {
              matches.push(match);
            }
            // 构建对象并赋值
            const myObj = {};
            matches.forEach(match => {
              const name = match[1];
              // console.log(match[2]);
              const value = match[2];
              myObj[name] = value;
            });
            //序列化， 网上的方法，不是很理解这种写法如何做的
            let Obj = {}
            for (let keys in myObj) {
              Obj[keys] = Function('"use strict";return (' + myObj[keys] + ')')();
            }
            // console.log("Obj",Obj);
            resolve({
              result: true, data: Obj
            })
            // resolve({
            //   result: true, data: {
            //     fS_name,//基金或股票信息 1
            //     fS_code,//基金代码  1
            //     ishb,//猜测是是否为货币类型基金 1
            //     fund_sourceRate,//原费率  1
            //     fund_Rate,//现费率  1
            //     fund_minsg,//最小申购金额 1
            //     //如果是基金类型为股票
            //     stockCodes, //基金持仓股票代码
            //     zqCodes,//基金持仓债券代码
            //     stockCodesNew,//基金持仓股票代码(新市场号)
            //     zqCodesNew,//基金持仓债券代码（新市场号）
            //     syl_1n,//近一年收益率
            //     syl_3y,//近三月收益率
            //     syl_6y,//近6月收益率
            //     syl_1y,//近一月收益率
            //     Data_fundSharesPositions,//股票仓位测算图
            //     Data_netWorthTrend,//单位净值走势 equityReturn-净值回报 unitMoney-每份派送金
            //     Data_ACWorthTrend,//累计净值走势
            //     Data_performanceEvaluation,//业绩评价 ['选股能力', '收益率', '抗风险', '稳定性','择时能力']
            //     Data_assetAllocationCurrency,//资产配置
            //     Data_grandTotal,//累计收益率走势
            //     Data_rateInSimilarType,//同类排名
            //     Data_rateInSimilarPersent,//百分比排名
            //     Data_sevenDaysYearIncome,//7日年化收益率
            //     Data_millionCopiesIncome,//每万份收益
            //     Data_fluctuationScale,//规模变动 (mom-较上期环比)
            //     Data_holderStructure,//持有人结构
            //     Data_assetAllocation,//申购赎回  （资产配置，股票返回的名称，可能是错的）
            //     Data_currentFundManager,//现任基金经理
            //     swithSameType,//同类型基金涨幅榜（页面底部通栏)
            //     Data_buySedemption //申购赎回
            //   }
            // });
          } catch (error) {
            console.log(error)
            resolve({
              result: false,
              message: "基金信息错误，请检查基金代码"
            })
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
  //天天基金获取所有基金类型列表
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
  },
  //阿里通用股票接口
  getAddFundInfo: (stockcode) => {
    // var symbols = "SZ159633" + "," + 'SZ159605'// 这是需要提交的数据 
    var symbols = stockcode // 这是需要提交的数据 
    // 阿里通用股票接口的
    let body_request = {
      hostname: 'alirmcom2.market.alicloudapi.com',
      path: "/query/comrms?symbols=" + symbols,
      method: "GET",
      port: 80,
      headers: {
        // "Accept": "application/json",
        // "Content-Type": "application/json;charset=UTF-8",
        "Authorization": "APPCODE bd031b64a6d64cc0be84baf130fe8cb0"
      },
    }

    return new Promise(function (resolve, reject) {
      /*****正常的发请求****/
      let content
      var req = http.request(body_request, (res) => {
        /*****设置编码****/
        res.setEncoding('utf-8');
        /*****合并返回数据****/
        res.on('data', (chunk) => {
          // console.log(chunk);
          content += chunk;
        });
        /*****数据获取完成后 resolve提交****/
        res.on('end', () => {
          resolve({ result: true, data: content });
        });
      })
      /*****发送请求体*****/
      // req.write(postdata);
      /*****异常处理*****/
      req.on('error', function (err) {
        console.log(err);
        resolve({ result: false, errmsg: err.message });
      });
      /*****结束请求*****/
      req.end();
    });
  }
}