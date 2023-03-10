let controllerPath = '@controller/consumptiontype/'

// controller/consumptiontype/'
//新增消费类型
router.post('/newconsumptiontype', async (ctx, next) => {
  await require(controllerPath + `newconsumptiontype.js`)(ctx, next)
  // require(`@/controller/test/index.js`)(ctx, next)
});
//新增消费类型
router.get('/getconsumptiontypelist', async (ctx, next) => {
  await require(controllerPath + `getconsumptiontype.js`)(ctx, next)
  // require(`@/controller/test/index.js`)(ctx, next)
});
//修改消费类型
router.post('/editconsumptiontype', async (ctx, next) => {
  await require(controllerPath + `editconsumptiontype.js`)(ctx, next)
  // require(`@/controller/test/index.js`)(ctx, next)
});
//删除消费类型
router.post('/deleteconsumptiontype', async (ctx, next) => {
  await require(controllerPath + `deleteconsumptiontype.js`)(ctx, next)
  // require(`@/controller/test/index.js`)(ctx, next)
});
//新建关联消费类型
router.post('/newassociatedbillname', async (ctx, next) => {
  await require(controllerPath + `newassociatedbillname.js`)(ctx, next)
  // require(`@/controller/test/index.js`)(ctx, next)
});
//获取关联消费类型
router.get('/getassociatedbill', async (ctx, next) => {
  await require(controllerPath + `getassociatedbill.js`)(ctx, next)
  // require(`@/controller/test/index.js`)(ctx, next)
});
//编辑关联消费类型
router.post('/editassociatedbill', async (ctx, next) => {
  await require(controllerPath + `editassociatedbill.js`)(ctx, next)
  // require(`@/controller/test/index.js`)(ctx, next)
});
//删除关联消费类型
router.post('/deleteassociatedbill', async (ctx, next) => {
  await require(controllerPath + `deleteassociatedbill.js`)(ctx, next)
  // require(`@/controller/test/index.js`)(ctx, next)
});

module.exports = router
