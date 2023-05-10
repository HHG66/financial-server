/*
 * @Author: HHG
 * @Date: 2023-03-21 22:27:27
 * @LastEditTime: 2023-05-10 17:48:50
 * @LastEditors: 韩宏广
 * @FilePath: \server\src\router\investment\index.js
 * @文件说明: 
 */
let controllerPath = '@controller/investment/'

//新增持仓基金
router.post('/newfund', async function (ctx, next) {
  await require(controllerPath + 'newfund.js')(ctx, next)
})

//获取持仓基金信息列表
router.get('/getpositionfundslist', async function (ctx, next) {
  await require(controllerPath + 'getpositionfundslist.js')(ctx, next)
})

//删除一直持仓基金
router.post('/deletefund', async function (ctx, next) {
  await require(controllerPath + 'deletefund.js')(ctx, next)
})

//基金状态修改
router.post('/editfundinfo', async function (ctx, next) {
  await require(controllerPath + 'editfundinfo.js')(ctx, next)
})

//更新基金信息净值接口
router.post('/getfundnetworth', async (ctx, next) => {
  await require(controllerPath + 'getfundnetworth.js')(ctx, next)
})  
 
//获取基金类型列表，使用频率很低，一年可能使用一次
router.get('/getfundtypelist', async (ctx, next) => {
  await require(controllerPath + 'getfundtypelist.js')(ctx, next)
}) 

//新增一只持仓股票
router.post('/newstock', async (ctx, next) => {
  await require(controllerPath + 'newstock.js')(ctx, next)
}) 

//编辑股票信息
router.post('/editstock', async (ctx, next) => {
  await require(controllerPath + 'editstock.js')(ctx, next)
}) 

//编辑股票信息
router.get('/getstocklist', async (ctx, next) => {
  await require(controllerPath + 'getstocklist.js')(ctx, next)
}) 

//删除股票信息
router.post('/deletestock', async (ctx, next) => {
  await require(controllerPath + 'deletestock.js')(ctx, next)
}) 

//新建存款单
router.post('/newcertificatedeposit', async (ctx, next) => {
  await require(controllerPath + 'newcertificatedeposit.js')(ctx, next)
}) 

//编辑存款单
router.post('/editdepositinfo', async (ctx, next) => {
  await require(controllerPath + 'editdepositinfo.js')(ctx, next)
}) 

//获取存款单列表
router.get('/getdepositlist', async (ctx, next) => {
  await require(controllerPath + 'getdepositlist.js')(ctx, next)
}) 

//删除存款单
router.post('/deletedepositinfo', async (ctx, next) => {
  await require(controllerPath + 'deletedepositinfo.js')(ctx, next)
}) 


 
 