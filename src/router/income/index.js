/*
 * @Author: HHG
 * @Date: 2023-03-08 21:07:35
 * @LastEditTime: 2023-03-08 21:31:16
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/router/income/index.js
 * @文件说明: 
 */
controllerPath = '@controller/income/'

router.post('/newincometype', async (ctx,next) => {
  await require(controllerPath + 'newincometype.js')(ctx,next)
})


module.exports = router