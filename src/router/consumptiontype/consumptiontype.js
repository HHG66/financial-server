//新增消费类型
router.post('/newconsumptiontype', async (ctx, next) => {
  await require(`controller/consumptiontype/newconsumptiontype.js`)(ctx, next)
  // require(`@/controller/test/index.js`)(ctx, next)
});
//新增消费类型
router.get('/getconsumptiontypelist', async (ctx, next) => {
  await require(`controller/consumptiontype/getconsumptiontype.js`)(ctx, next)
  // require(`@/controller/test/index.js`)(ctx, next)
});
//修改消费类型
router.post('/editconsumptiontype', async (ctx, next) => {
  await require(`controller/consumptiontype/editconsumptiontype.js`)(ctx, next)
  // require(`@/controller/test/index.js`)(ctx, next)
});
//删除消费类型
router.post('/deleteconsumptiontype', async (ctx, next) => {
  await require(`controller/consumptiontype/deleteconsumptiontype.js`)(ctx, next)
  // require(`@/controller/test/index.js`)(ctx, next)
});
//新建关联消费类型
router.post('/newassociatedbillname', async (ctx, next) => {
  await require(`controller/consumptiontype/newassociatedbillname.js`)(ctx, next)
  // require(`@/controller/test/index.js`)(ctx, next)
});
//获取关联消费类型
router.get('/getassociatedbill', async (ctx, next) => {
  await require(`controller/consumptiontype/getassociatedbill.js`)(ctx, next)
  // require(`@/controller/test/index.js`)(ctx, next)
});


module.exports = router
