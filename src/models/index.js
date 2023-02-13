/*
 * @Author: HHG
 * @Date: 2023-02-11 01:29:56
 * @LastEditTime: 2023-02-12 18:21:05
 * @LastEditors: 韩宏广
 * @FilePath: /koa-cli/src/models/index.js
 * @文件说明: 数据库的初始化，在这里做
 */

const { User } = require('./user')
module.exports = () => {
 new Promise((resolve,reject)=>{
  User.findOne({
    user_name: 'admin'
  }).then(function (data) {
    let users
    if (data == null) {
      users = ''
    } else {
      users = data
    }
    if (users.id !== 1) {
      User.create({
        id: 1,
        user_name: 'admin',
        password: 'admin',
        permissions: 'admin'
      })
    }
  })
 })
}
