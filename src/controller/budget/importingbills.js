/*
 * @Author: HHG
 * @Date: 2023-03-14 20:02:49
 * @LastEditTime: 2023-03-14 22:15:53
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/controller/budget/importingbills.js
 * @文件说明: 
 */
const serve = require('@/service/budget/importingbills')
module.exports = async (ctx, next) => {
  // let {tradinghours,tradetype,counterparty,goods,collectorbranch,amount,currentstate,trasactionid,merchantstoorder,remark}=ctx.request.body
  let importNum = ctx.request.body.tabeData.length
  ctx.request.body = ctx.request.body.tabeData
  const rusult = await serve(ctx)
  console.log(importNum);
  console.log(rusult);
  if (rusult === importNum) {
    response(ctx, {}, { message: `新增成功,共导入${rusult}条数据` })
  }else{
    response(ctx, {}, { message: `导入失败` })
  }
}