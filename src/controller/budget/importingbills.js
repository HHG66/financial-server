/*
 * @Author: HHG
 * @Date: 2023-03-14 20:02:49
 * @LastEditTime: 2023-03-15 17:00:05
 * @LastEditors: 韩宏广
 * @FilePath: \financial\src\controller\budget\importingbills.js
 * @文件说明: 
 */
const serve = require('@/service/budget/importingbills')
module.exports = async (ctx, next) => {
  // let {tradinghours,tradetype,counterparty,goods,patternpayment,collectorbranch,amount,currentstate,trasactionid,merchantstoorder,remark}=ctx.request.body
  let importNum = ctx.request.body.tabeData.length
  ctx.request.body = ctx.request.body.tabeData
  const rusult = await serve(ctx)
  // console.log(importNum);
  console.log(rusult);
  if (rusult === importNum) {
    response(ctx, {}, { message: `新增成功,共导入${rusult}条数据` })
  }else{
    response(ctx, {}, { message: `导入失败` })
  }
}