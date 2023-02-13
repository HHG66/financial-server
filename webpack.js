/*
 * @Author: HHG
 * @Date: 2023-02-11 13:31:10
 * @LastEditTime: 2023-02-12 00:37:26
 * @LastEditors: 韩宏广
 * @FilePath: /koa-cli/webpack.js
 * @文件说明: 
 */
const webpack = require('webpack');

const config = require('./webpack.config.js');

const compiler = webpack(config)

const watching = compiler.watch({
}, (err, stats) => { 
  // 这里打印 watch/build 结果...
  console.log(1);
});