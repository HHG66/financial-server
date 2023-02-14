let routerName = '/newconsumptiontype'
// router.opts={
//   prefix: '/admin'
// }
router.post(routerName, (ctx, next) => {
  console.log('进入路由');
  require(`controller/${routerName}/index.js`)(ctx, next)
  // require(`@/controller/test/index.js`)(ctx, next)
});
module.exports = router
