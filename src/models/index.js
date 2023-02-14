/*
 * @Author: HHG
 * @Date: 2023-02-11 01:29:56
 * @LastEditTime: 2023-02-14 20:08:40
 * @LastEditors: 韩宏广
 * @FilePath: /Personal-finance/src/models/index.js
 * @文件说明: 数据库的初始化，在这里做
 */

const { User } = require('./user')
module.exports = async () => {
  new Promise((resolve, reject) => {
    // findById()
    User.findOne({
      user_name: 'admin'
    }).then(function (data) {
      if (data == null) {
        User.bulkWrite([
          {
            insertOne: {
              document: { id: 1, user_name: 'admin', password: 'admin', permissions: '1,2-1,2-2,2,3,3-1,3-2,4,4-1,4-2,5,5-1,5-2,5-3,6,6-1,6-2,7,8' }
            }
          },
        ])
      }
    })
    // let await User.insertOne(
    //     { id: 1, user_name: 'admin', password: 'admin', permissions: '1,2-1,2-2,2,3,3-1,3-2,4,4-1,4-2,5,5-1,5-2,5-3,6,6-1,6-2,7,8' }
    //   )


  })
}
