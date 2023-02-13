module.exports = (ctx, next) => {
  // console.log(ctx,next);
  // console.log( ctx.request.body);
  // console.log(ctx.query);
  // console.log(ctx.request.query);
  // console.log(ctx.request.query.test);
  // console.log('test');
  // console.log(next);
  business()
  next()
}
app.use((ctx, next) => {
  console.log('自定义中间件');
  models().then(res => {  
    console.log(res);
  })
  ctx.body='返回处理结果'
  next()
});
app.use((ctx, next) => {
  console.log('自定义中间件2');
});

const business = (ctx) => {
  console.log('处理业务');
}

//数据库操作要异步处理
const models = async () => {
  return new Promise(function (resolve, reject) {
    console.log('调用数据库方法');
    // require('@/mapper/test/index')()
    require('mapper/test/index')()
    resolve('Promise')
  })
}