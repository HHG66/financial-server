
const userServe = require('service/user/index.js')
const mapper = require('mapper/user/index.js')


module.exports = async (ctx, next) => {

  let { username, password } = ctx.request.body;
  //处理参数
  ctx.request.body = { username: username, password: password }
  //业务层处理
  // let userServes =await userServe(ctx, next)
  // console.log(userServes);
  // let result = await userServes.userServe
  // console.log(result);

  // console.log('=====');
  // console.log(mapper);
  // console.log('=====');

  let ttt =await mapper(ctx, next)

  // console.log('=====');
  console.log(ttt);
  // console.log('=====');

  // console.log(ttt);
  // let responsedata = {
  //   token: "123213213",
  //   userinfo: {
  //     username: result.user_name,
  //     permissions: "1,2-1,2-2,2,3,3-1,3-2,4,4-1,4-2,5,5-1,5-2,5-3,6,6-1,6-2,7,8"
  //   }
  // }
  // response(ctx, responsedata)
}
