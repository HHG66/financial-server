/*
 * @Author: HHG
 * @Date: 2023-03-22 21:17:36
 * @LastEditTime: 2023-04-03 21:58:20
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/service/investment/getpositionfundslist.js
 * @文件说明: 
 */
const { getpositionfundslist } = require('@/mapper/investment/index.js')
const http = require('node:http');
const qs = require('querystring');

module.exports = async (ctx) => {
  getAddFundInfo().then(res => {
    console.log(res);
  })
  let serveResult = []
  let fundAdditionInfo = []
  let mapperResult = await getpositionfundslist(ctx.query)
  // console.log(mapperResult);
  mapperResult.forEach(element => {
    fundAdditionInfo.push({
      _id: element._id,

    })
    serveResult.push({
      ...element,

    })
  });
  // console.log(mapperResult);
  return mapperResult
}


const getAddFundInfo = () => {
  var symbols = "SZ159633" + "," + 'SZ159605'// 这是需要提交的数据 
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

  // let body_request = {
  //   hostname: '127.0.0.1',
  //   path: "/m1/1605761-0-default/getconsumptiontypelist" ,
  //   method: "GET",
  //   port: 4523,
  //   headers: {
  //     // "Accept": "application/json",
  //     // "Content-Type": "application/json;charset=UTF-8",
  //     "Authorization": "APPCODE bd031b64a6d64cc0be84baf130fe8cb0"
  //   },
  // }
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