/*
 * @Author: HHG
 * @Date: 2023-02-08 22:13:49
 * @LastEditTime: 2023-02-13 15:36:05
 * @LastEditors: 韩宏广
 * @FilePath: \financial\src\app.js
 * @文件说明: 
 */
require('app-module-path').addPath(__dirname);

const Koa = require('koa')
const Router = require('@koa/router');
const bodyParser = require('koa-bodyparser');
const mongoConnect = require('lib/db.js')
var cors = require('koa2-cors');
const InitController = require('./router/index.js')
const modelInit = require('models/index.js')
const response = require('lib/response.js')

const app = new Koa();

//写入全局变量
// let router = new Router({
//   prefix: '/admin'
// });
let router = new Router();
global.router = router
// app.use(async ctx => {
//   console.log(ctx);
// })

app.use(bodyParser())
InitController.InitCore(app)

app.use(cors());

mongoConnect()
modelInit()
//响应方法挂载到全局
global.response = response
//开启一个web服务器 
app.listen(3000, () => {
  console.log('启动服务 端口3000...');
});

global.app = app

module.exports = app
