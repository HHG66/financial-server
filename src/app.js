/*
 * @Author: HHG
 * @Date: 2023-02-08 22:13:49
 * @LastEditTime: 2023-02-14 14:46:06
 * @LastEditors: 韩宏广
 * @FilePath: \financial\src\app.js
 * @文件说明: 
 */
require('app-module-path').addPath(__dirname);

const Koa = require('koa')
const Router = require('@koa/router');
const bodyParser = require('koa-bodyparser');
const mongoConnect = require('lib/db.js')
const cors = require('koa2-cors');
const InitController = require('./router/index.js')
const modelInit = require('models/index.js')
const response = require('lib/response.js')
const log4js = require("log4js");
var jwt = require('koa-jwt');
const errorMiddlware = require('middleware/error.js')

const app = new Koa();
app.use(cors());

//只能处理接口内部的错误
// app.use(
//   async (ctx,next) => {
//     try {
//       await next()
//     } catch (error) {
//         console.log(ctx);
//         console.log(error);
//     }
//   }
// )


app.use(jwt({ secret: 'secret' }).unless({ path: '/login' }));

//写入全局变量
let router = new Router();
global.router = router
// app.use(async ctx => {
//   console.log(ctx);
// })

app.use(bodyParser())
InitController.InitCore(app)

log4js.configure({
  appenders: { cheese: { type: "file", filename: "cheese.log" } },
  categories: { default: { appenders: ["cheese"], level: "error" } },
});

const logger = log4js.getLogger();
logger.level = "debug";
logger.debug("Some debug messages");

app.on('error', (error, ctx) => {
  errorMiddlware(ctx,error)
  // console.log('99',error.status);
  // logger.debug(66,error);
  // console.log(error);
});

mongoConnect()
modelInit()
//响应方法挂载到全局
global.response = response


//开启一个web服务器 
app.listen(3000, (ctx) => {
  console.log('启动服务 端口3000...');
});

global.app = app

module.exports = app
