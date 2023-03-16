/*
 * @Author: HHG
 * @Date: 2023-02-12 11:37:58
 * @LastEditTime: 2023-03-16 21:20:48
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/lib/db.js
 * @文件说明: 
 */
const mongoose = require('mongoose');
const errorMiddlware = require('@/middleware/error.js')
module.exports = async (resolve, reject) => {
  mongoose.set("strictQuery", false);
  await mongoose.connect('mongodb://192.168.0.109:27017/financial', {
    // await mongoose.connect('mongodb://frp-hip.top:13552/financial', {
    // await mongoose.connect('mongodb://127.0.0.1:27017/financial', {
    // mongoose.connect('mongodb://mywebsite:han1314.@118.31.79.83:27017/my_website', {
    //mongodb://mywebsite:han1314.@118.31.79.83:27017/my_website
    //'mongodb://127.0.0.1:27017/my_website'
    // mongodb://admin:12345@localhost:27017/my_website 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 3000
  })
    .then(function (res) {
      // console.log(err);
      console.log('数据库连接成功');
      //返回连接状态，做初始化操作
      // return resolve()
    })
    .catch(function (err) {
      console.log('数据库连接失败', err);
      errorMiddlware({}, err)
      // return reject()
    })
  // mongoose.connection.on('error', err => {
  //   console.log(err);
  // });
}