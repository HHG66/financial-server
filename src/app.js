/*
 * @Author: HHG
 * @Date: 2023-02-08 22:13:49
 * @LastEditTime: 2023-02-12 18:23:25
 * @LastEditors: 韩宏广
 * @FilePath: /koa-cli/src/app.js
 * @文件说明: 
 */
require('app-module-path').addPath(__dirname);

const Koa = require('koa')
const Router = require('@koa/router');
const bodyParser = require('koa-bodyparser');
const mongoConnect=require('lib/db.js')
const InitController = require('./router/index.js')
const modelInit=require('models/index.js')
const app = new Koa();

//写入全局变量
let router = new Router({
  prefix:'/admin'
});
global.router=router


app.use(bodyParser())
InitController.InitCore(app)

mongoConnect()
modelInit()
//开启一个web服务器 
app.listen(3000, () => {
  console.log('启动服务 端口3000...');
});

global.app = app

module.exports = app
