/*
 * @Author: HHG
 * @Date: 2023-02-12 17:44:26
 * @LastEditTime: 2023-02-12 17:44:27
 * @LastEditors: 韩宏广
 * @FilePath: /koa-cli/src/models/user.js
 * @文件说明: 
 */
const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
  id: Number,
  user_name: String,
  password: String,
  permissions: String
})

const User = mongoose.model('user', userSchema)

module.exports = {
  User
}