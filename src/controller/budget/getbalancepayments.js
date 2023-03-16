/*
 * @Author: HHG
 * @Date: 2023-03-14 19:56:34
 * @LastEditTime: 2023-03-16 17:37:43
 * @LastEditors: 韩宏广
 * @FilePath: \financial\src\controller\budget\getbalancepayments.js
 * @文件说明: 
 */
const serve=reuqire('@/service/budget/getbalancepayments')
module.exports=async(ctx,next)=>{
  let {date}=ctx.query
  ctx.query={
    date:date.replace('-','/')
  }
  console.log();
  // let {data,}
}