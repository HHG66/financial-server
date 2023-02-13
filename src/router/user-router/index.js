/*
 * @Author: HHG
 * @Date: 2023-02-12 10:59:37
 * @LastEditTime: 2023-02-12 11:31:44
 * @LastEditors: 韩宏广
 * @FilePath: /koa-cli/src/router/user-router/index.js
 * @文件说明: 
 */

let routerName = '/user'
router.post(routerName, (ctx, next) => {
  console.log('进入路由');
});
module.exports = router
