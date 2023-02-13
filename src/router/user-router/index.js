/*
 * @Author: HHG
 * @Date: 2023-02-12 10:59:37
 * @LastEditTime: 2023-02-13 16:17:19
 * @LastEditors: 韩宏广
 * @FilePath: \financial\src\router\user-router\index.js
 * @文件说明: 
 */

let routerName = '/login'
router.post(routerName, async(ctx, next) => {
 await require(`controller/user/index.js`)(ctx, next)
});
module.exports = router
