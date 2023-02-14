const { User } = require('models/user.js');
const { findOne } = require('../index')
module.exports = {
  registeredUser: (ctx, next) => {
    let user = findOne(User, {
      user_name: ctx.request.body.username,
      // password: ctx.request.body.password,
      // user_name: 'admin',
      // password: 'admin',
    })
    return user
  },
  userInfo: (ctx, next) => {
    let userInfo = findOne(User, {
      user_name: ctx.request.body.username,
      password: ctx.request.body.password,
    })
    return userInfo
  }

}