/*
 * @Author: HHG
 * @Date: 2023-03-21 22:27:27
 * @LastEditTime: 2023-03-27 11:05:10
 * @LastEditors: 韩宏广
 * @FilePath: \financial\src\router\investment\index.js
 * @文件说明: 
 */
let controllerPath = '@controller/investment/'

//新增持仓基金
router.post('/newfund', async function (ctx,next) {
 await require(controllerPath + 'newfund.js')(ctx,next)
})

//获取持仓基金信息列表
router.get('/getpositionfundslist', async function (ctx,next) {
  await  require(controllerPath + 'getpositionfundslist.js')(ctx,next)
})

//删除一直持仓基金
router.post('/deletefund', async function (ctx,next) {
  await  require(controllerPath + 'deletefund.js')(ctx,next)
})

//基金状态修改
router.post('/editfundinfo', async function (ctx,next) {
  await  require(controllerPath + 'editfundinfo.js')(ctx,next)
})