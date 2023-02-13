const { User } = require('models/user.js');
const { findOne } = require('../index')
module.exports = (ctx, next) => {
  console.log('执行调用数据库的方法，包括mongodb，mysql等其他数据库');
  // dataMethod(ctx).then((res)=>{
  //   console.log(res);
  // })
}

let dataMethod = (ctx) => {
  return new Promise((resolve, reject) => {
    let user = findOne(User, {
      // user_name: username,
      // password: password,
    }, ctx)
    resolve(user)
  })
}