/*
 * @Author: HHG
 * @Date: 2023-02-13 21:51:33
 * @LastEditTime: 2023-02-14 00:51:37
 * @LastEditors: 韩宏广
 * @FilePath: /Personal-finance/src/middleware/error.js
 * @文件说明: 
 */
const log4js = require("log4js");

module.exports = async (ctx, next) => {
  try {
    await next();   // 执行后代的代码
  } catch (e) {
    var logger = log4js.getLogger();
    switch (e.status) {
      case 500:
        ctx.status = 500
        ctx.body = {
          error: "服务器处理异常"
        }
        console.log(e);
        logger.debug("code:500", e);
        break;
      case 401:
        ctx.status = 401
        ctx.body = {
          error: "权限错误"
        }
        console.log(401, "权限错误");
        logger.debug("code:401", e);
      default:
        console.log(e);
        break;
    }
  }

} 