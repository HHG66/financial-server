/*
 * @Author: HHG
 * @Date: 2023-02-14 16:00:07
 * @LastEditTime: 2023-02-14 16:01:45
 * @LastEditors: 韩宏广
 * @FilePath: \financial\src\models\consumptiontype\type.js
 * @文件说明: 
 */
const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
  id: Number,
  user_name: String,
  password: String,
  permissions: String
})

const User = mongoose.model(' ', userSchema)

module.exports = {
  User
}