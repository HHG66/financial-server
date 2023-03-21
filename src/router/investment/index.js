/*
 * @Author: HHG
 * @Date: 2023-03-21 22:27:27
 * @LastEditTime: 2023-03-21 23:27:47
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/router/investment/index.js
 * @文件说明: 
 */
let controllerPath = '@controller/investment/'

router.get('/getpositionfundslist', function () {
  require(controllerPath + 'getpositionfundslist.js')
})

router.post('/newfund', async function (ctx,next) {
 await require(controllerPath + 'newfund.js')(ctx,next)
})
