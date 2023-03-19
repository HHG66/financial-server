/*
 * @Author: HHG
 * @Date: 2023-03-15 17:03:57
 * @LastEditTime: 2023-03-18 20:29:12
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/controller/budget/getdisposebill.js
 * @文件说明: 
 */
const serve = require('@/service/budget/getdisposebill.js')
module.exports = async (ctx, next) => {
  let year = ''
  let month = ''
  let day = ''
  let { date } = ctx.query
  if (date) {
    //转化日期格式
    year = date.substring(2, 4);
    month = date.substring(5, 6) == 0 ? date.substring(6, 7) : date.substring(5, 7);
    day = date.substring(8, 10);
    ctx.query = {
      date: month + '/' + day + '/' + year
    }
  }
  console.log(ctx.query);
  let rusult = await serve(ctx)
  //分页先写死
  response(ctx, { list: rusult, total: 100, pagesize: 10, current: 1 }, { message: "请求成功" })
}