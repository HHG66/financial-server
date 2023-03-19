/*
 * @Author: HHG
 * @Date: 2023-03-15 17:04:34
 * @LastEditTime: 2023-03-18 20:17:46
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/service/budget/getdisposebill.js
 * @文件说明: 
 */
let { getdisposebill } = require('@/mapper/budget/index.js')
module.exports = async (ctx) => {
  let serveResult = []
  //暂时只做日的查询
  let mapperResult = await getdisposebill(ctx.query.date)
  // console.log(mapperResult);
  mapperResult.forEach(element => {
    // console.log(element);
    element = JSON.stringify(element)
    element = JSON.parse(element)
    //不理解，如何就把_id就替换出去了。
    let { _id, ...obj } = element
    obj.id = element._id
    serveResult.push(obj)
  });
  return serveResult
}