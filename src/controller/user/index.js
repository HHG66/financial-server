
const userServe = require('service/user/index.js')
const mapper = require('mapper/user/index.js')


module.exports = async (ctx, next) => {
  let { username, password } = ctx.request.body;
  //处理参数
  ctx.request.body = { username: username, password: password }
  //业务层处理
  let userServes = await userServe(ctx, next)

  if (userServes.state == 0) {

    response(ctx, {}, { message: '用户未注册', desc: 'error' })

  } else if (userServes.state == 1) {
    response(ctx, {}, { message: "账号或者密码错误", desc: 'error' })
  } else if (userServes.state == 2) {
    let responsedata = {
      token: "123213213",
      userinfo: userServes.retController
    }
    response(ctx, responsedata)
  }else{
    response(ctx,{},{message:"请输入账号或者密码"})
  }
}
