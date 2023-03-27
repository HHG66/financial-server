/*
 * @Author: HHG
 * @Date: 2023-03-19 19:49:52
 * @LastEditTime: 2023-03-19 20:33:07
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/service/budget/getimportrecords.js
 * @文件说明: 
 */
const { getimportrecords } = require('@/mapper/budget/index.js')
module.exports = async (ctx) => {
  let serveResult = []
  let { starttime, endtime } = ctx.query
  let mapperResult = await getimportrecords(starttime, endtime)
  // console.log(mapperResult);
  mapperResult.forEach(element => {
    element = JSON.parse(JSON.stringify(element))
    let { _id, ...data } = element
    serveResult.push({
      ...data,
      id:element._id
    })
  });
  return serveResult
}