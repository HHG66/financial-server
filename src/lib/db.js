/*
 * @Author: HHG
 * @Date: 2023-02-12 11:37:58
 * @LastEditTime: 2023-02-14 17:26:43
 * @LastEditors: 韩宏广
 * @FilePath: \financial\src\lib\db.js
 * @文件说明: 
 */
const mongoose = require('mongoose');
module.exports = async () => {
  mongoose.set("strictQuery", false);
  await mongoose.connect('mongodb://127.0.0.1:27017/test', {
    // mongoose.connect('mongodb://mywebsite:han1314.@118.31.79.83:27017/my_website', {
    //mongodb://mywebsite:han1314.@118.31.79.83:27017/my_website
    //'mongodb://127.0.0.1:27017/my_website'
    // mongodb://admin:12345@localhost:27017/my_website 
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(function (client, err) {
      console.log( client);
    
      client.collection.insertOne(
        { id: 1, user_name: 'admin', password: 'admin', permissions: '1,2-1,2-2,2,3,3-1,3-2,4,4-1,4-2,5,5-1,5-2,5-3,6,6-1,6-2,7,8' }
      )
      console.log('数据库连接成功');
    })
    .catch(function (err) {
      console.log('数据库连接失败', err);
    })


}