/*
 * @Author: HHG
 * @Date: 2023-03-14 20:02:54
 * @LastEditTime: 2023-03-20 21:42:38
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/service/budget/importingbills.js
 * @文件说明: 
 */
const { importingbills, addBatchInfo } = require('@/mapper/budget/index.js')
module.exports = async (ctx, next) => {

  // ctx.request.body.forEach((element) => {
  //   let mapperRusult = importingbills(element)
  // });

  let batchinfo = await addBatchInfo()
  console.log(batchinfo);
  console.log(ctx.request.body);
  let data = []
  //   ...ctx.request.body,
  // ]
  ctx.request.body.forEach(element => {
    data.push({
      ...element,
      batchid:batchinfo._id
    })
  });
  let mapperRusult = await importingbills(data)

  return mapperRusult
}