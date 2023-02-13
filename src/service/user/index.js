const userMapper = require('mapper/user/index')
module.exports = async (ctx, next) => {
  // console.log(ctx.request.body);
  let tt = '123'
  // let userServe = new Promise((resolve, reject) => {
  //   resolve(userMapper(ctx, next))
  // }
  // )

  // let ssss = await userMapper(ctx, next)
  // console.log(ssss);
  // console.log(ttt());
  // console.log(userMapper(ctx, next));
  // console.log(ssss);

  // console.log(userMapper);
  // let ttt = await userMapper(ctx, next)

  console.log('------');
  // console.log(ttt);
  let sss =  userMapper(ctx, next)
  console.log(sss);
  console.log('------');
  return {
    tt,
    userServe: userMapper(ctx, next)
  }
}