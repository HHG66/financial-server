module.exports = (ctx, next) => {
  console.log('controller处理路由参数');
  // require('../../service/test/index.js')(ctx, next)
  require('service/test/index.js')(ctx, next)
}

