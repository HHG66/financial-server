/*
 * @Author: HHG
 * @Date: 2023-02-12 10:59:37
 * @LastEditTime: 2023-02-18 13:04:46
 * @LastEditors: 韩宏广
 * @FilePath: /Personal-finance/src/router/user-router/index.js
 * @文件说明: 
 */

let routerName = '/login'
router.post(routerName, async (ctx, next) => {
  await require(`@controller/user/index.js`)(ctx, next)
});
module.exports = router
