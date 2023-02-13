const { User } = require('models/user.js');
const { findOne } = require('../index')
module.exports = (ctx, next) => {
  let user = findOne(User, {
    // user_name: ctx.request.body.username,
    // password: ctx.request.body.password,
    user_name: 'admin',
    password: 'admin',
  }, ctx)
  return user

  // return new Promise((resolve, reject) => {
  //   let user = findOne(User, {
  //     user_name: ctx.request.body.username,
  //     password: ctx.request.body.password,
  //   }, ctx)
  //   resolve(user)
  // })
}