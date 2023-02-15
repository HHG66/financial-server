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
//修改
router.post('/editconsumptiontype', async (ctx, next) => {
  await require(`controller/consumptiontype/editconsumptiontype.js`)(ctx, next)
  // require(`@/controller/test/index.js`)(ctx, next)
});
//删除
router.post('/deleteconsumptiontype', async (ctx, next) => {
  await require(`controller/consumptiontype/deleteconsumptiontype.js`)(ctx, next)
  // require(`@/controller/test/index.js`)(ctx, next)
});

module.exports = router
