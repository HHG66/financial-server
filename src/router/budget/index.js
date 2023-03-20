/*
 * @Author: HHG
 * @Date: 2023-03-14 19:55:16
 * @LastEditTime: 2023-03-20 21:21:17
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/router/budget/index.js
 * @文件说明: 
 */
let controllerPath = '@controller/budget/'

//获取某个日期的收支情况
router.get('/getbalancepayments', async (ctx, next) => {
  await require(controllerPath + `getbalancepayments.js`)(ctx, next)
});
//导入excel账单
router.post('/importingbills', async (ctx, next) => {
  await require(controllerPath + `importingbills.js`)(ctx, next)
});
//获取导入账单列表
router.get('/getdisposebill', async (ctx, next) => {
  await require(controllerPath + `getdisposebill.js`)(ctx, next)
});
//新增一笔财务记录
router.post('/newfinancialrecord', async (ctx, next) => {
  await require(controllerPath + `newfinancialrecord.js`)(ctx, next)
});
//获取阅读的一些财务情况，用于日历
router.get('/getperiodtimebill', async (ctx, next) => {
  await require(controllerPath + `getperiodtimebill.js`)(ctx, next)
});
//获取导入记录列表
router.get('/getimportrecords', async (ctx, next) => {
  await require(controllerPath + `getimportrecords.js`)(ctx, next)
});
//获取导入记录列表
router.get('/getinportbillinfo', async (ctx, next) => {
  await require(controllerPath + `getinportbillinfo.js`)(ctx, next)
});
