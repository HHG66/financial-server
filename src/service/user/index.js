const { registeredUser, userInfo } = require('mapper/user/index')
var jwtToken = require('jsonwebtoken');


module.exports = async (ctx, next) => {
  let state
  let retController
  let token = jwtToken.sign({}, "secret", { expiresIn: '4h' });
  //可以根据查找出来的数据做操作
  let userMapperdata = await registeredUser(ctx, next)
  // console.log(userMapperdata);
  if (userMapperdata) {
    let info = await userInfo(ctx, next)
    state = 0
    if (info == null) {
      retController = {}
      state = 1
    } else {
      retController = {
        token: token,
        username: info.user_name,
        id: info._id,
        permissions: info.permissions
      }
      state = 2
    }

  }
  //返回结果，结果没有处理，交给controller处理
  return {
    state,
    retController
  }
}