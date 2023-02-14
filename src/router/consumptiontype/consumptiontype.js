router.post('/newconsumptiontype',async (ctx, next) => {
 await require(`controller/consumptiontype/newconsumptiontype.js`)(ctx, next)
  // require(`@/controller/test/index.js`)(ctx, next)
});
module.exports = router
