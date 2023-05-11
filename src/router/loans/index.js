let controllerPath = '@controller/loan/'

//新增存款单
router.post('/newloan', async (ctx, next) => {
  await require(controllerPath + 'newloan.js')(ctx, next)
}) 
//编辑存款单
router.post('/editdepositinfo', async (ctx, next) => {
  await require(controllerPath + 'editdepositinfo.js')(ctx, next)
}) 