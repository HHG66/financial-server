/*
 * @Author: HHG
 * @Date: 2023-03-14 19:55:16
 * @LastEditTime: 2023-03-15 17:03:57
 * @LastEditors: 韩宏广
 * @FilePath: \financial\src\router\budget\index.js
 * @文件说明: 
 */
let controllerPath = '@controller/budget/'

//获取某个日期的收支情况
router.post('/getbalancepayments', async (ctx, next) => {
  await require(controllerPath + `getbalancepayments.js`)(ctx, next)
});
//导入excel账单
router.post('/importingbills', async (ctx, next) => {
  await require(controllerPath + `importingbills.js`)(ctx, next)
});
//获取导入账单列表
router.post('/getdisposebill', async (ctx, next) => {
  await require(controllerPath + `getdisposebill.js`)(ctx, next)
});
