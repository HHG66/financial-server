//新增消费类型
router.post('/newconsumptiontype',async (ctx, next) => {
 await require(`controller/consumptiontype/newconsumptiontype.js`)(ctx, next)
  // require(`@/controller/test/index.js`)(ctx, next)
});
//新增消费类型
router.get('/getconsumptiontypelist',async (ctx, next) => {
  await require(`controller/consumptiontype/getconsumptiontype.js`)(ctx, next)
   // require(`@/controller/test/index.js`)(ctx, next)
 });
module.exports = router
