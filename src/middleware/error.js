/*
 * @Author: HHG
 * @Date: 2023-02-13 21:51:33
 * @LastEditTime: 2023-02-14 09:11:09
 * @LastEditors: 韩宏广
 * @FilePath: \financial\src\middleware\error.js
 * @文件说明: 
 */
const log4js = require("log4js");

module.exports =  (ctx, error) => {

  var logger = log4js.getLogger();
  switch (error.status) {
    case 500:
      ctx.status = 500
      ctx.body = {
        error: "服务器处理异常"
      }
      console.log(error);
      logger.debug("code:500", error);
      break;
    case 401:
      ctx.status = 401
      ctx.body = {
        error: "权限错误"
      }
      console.log(401, "权限错误");
      logger.debug("code:401", error);
      break;
    default:
      logger.debug("未知错误", error);
      console.log(error);
      break;
  }

} 