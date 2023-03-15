/*
 * @Author: HHG
 * @Date: 2023-03-15 17:04:34
 * @LastEditTime: 2023-03-15 17:09:25
 * @LastEditors: 韩宏广
 * @FilePath: \financial\src\service\budget\getdisposebill.js
 * @文件说明: 
 */
let {getdisposebill} =require('@/mapper/budget/index.js')
module.exports=(ctx)=>{

  //暂时只做日的查询
  let mapperResult=await getdisposebill(ctx.query.data)
}