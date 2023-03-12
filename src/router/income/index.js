/*
 * @Author: HHG
 * @Date: 2023-03-08 21:07:35
 * @LastEditTime: 2023-03-12 12:07:47
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/router/income/index.js
 * @文件说明: 
 */
let  controllerPath = '@controller/income/'

router.post('/newincometype', async (ctx,next) => {
  await require(controllerPath + 'newincometype.js')(ctx,next)
})
router.get('/getincometypelist', async (ctx,next) => {
  await require(controllerPath + 'getincometypelist.js')(ctx,next)
})
router.post('/editincometype', async (ctx,next) => {
  await require(controllerPath + 'editincometype.js')(ctx,next)
})
router.post('/deleteincometype', async (ctx,next) => {
  await require(controllerPath + 'deleteincometype.js')(ctx,next)
})


module.exports = router