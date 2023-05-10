let controllerPath = '@controller/loans/'

//编辑存款单
router.post('/editdepositinfo', async (ctx, next) => {
  await require(controllerPath + 'editdepositinfo.js')(ctx, next)
}) 