/*
 * @Author: HHG
 * @Date: 2023-04-03 21:53:10
 * @LastEditTime: 2023-04-03 23:13:32
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/service/investment/getfundnetworth.js
 * @文件说明: 
 */
const { getfundnetworth } = require('@/mapper/investment/index.js')
const http = require('node:http')
const qs = require('querystring');

module.exports = async (fundid, fundcode) => {
  // const mapperResult = await getfundnetworth(fundid)
  let fundnetworth = new Promise(function (resolve, reject) {

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
  fundnetworth.then(res => {
    getfundnetworth(fundid,res.data)
    getData(res.data)
  })
}

//处理结果不正确
function getData(text) {
  const regex = /var\s+(\w+)\s*=\s*(("[^"]+"|{|}|[^\s,]+)\s*(,|\n|$))/g;
  const result = {};

  let match;
  while ((match = regex.exec(text)) !== null) {
    const key = match[1];
    let value = match[2];

    // If the value is a string, remove the surrounding quotes
    if (value[0] === '"' && value[value.length - 1] === '"') {
      value = value.slice(1, -1);
    }
    // If the value is a JSON object, parse it as JSON
    else if (value[0] === '{' && value[value.length - 1] === '}') {
      try {
        value = JSON.parse(value);
      } catch (e) {
        console.error(`Error parsing JSON value for variable '${key}': ${e.message}`);
        continue;
      }
    }
    // If the value is a boolean or number, parse it using JavaScript's built-in parsing functions
    else if (value === 'true') {
      value = true;
    } else if (value === 'false') {
      value = false;
    } else if (!isNaN(value)) {
      value = parseFloat(value);
    }
    result[key] = value;
  }
  console.log(result);
}



