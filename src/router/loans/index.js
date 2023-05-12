let controllerPath = '@controller/loan/'

//新增存款单
router.post('/newloan', async (ctx, next) => {
  await require(controllerPath + 'newloan.js')(ctx, next)
})

//获取存款单列表
router.get('/getloanlist', async (ctx, next) => {
  await require(controllerPath + 'getloanlist.js')(ctx, next)
})

//获取贷款单还款计划列表
router.get('/getloaninfolist', async (ctx, next) => {
  await require(controllerPath + 'getloaninfolist.js')(ctx, next)
})

//删除贷款信息
router.post('/deleteloan', async (ctx, next) => {
  await require(controllerPath + 'deleteloan.js')(ctx, next)
})

//获取贷款单基础信息
router.get('/getloaninfo', async (ctx, next) => {
  await require(controllerPath + 'getloaninfo.js')(ctx, next)
})

//编辑贷款单详细列表
router.post('/editloaninfolist', async (ctx, next) => {
  await require(controllerPath + 'editloaninfolist.js')(ctx, next)
})
