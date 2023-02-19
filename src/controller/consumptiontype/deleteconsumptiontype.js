/*
 * @Author: HHG
 * @Date: 2023-02-15 22:39:26
 * @LastEditTime: 2023-02-15 22:52:45
 * @LastEditors: 韩宏广
 * @FilePath: /Personal-finance/src/controller/consumptiontype/deleteconsumptiontype.js
 * @文件说明: 
 */
const deleteconsumptiontype = require('service/consumptiontype/deleteconsumptiontype.js')

module.exports = async (ctx, next) => {
  let respond = []
  //获取参数
  let { consumptiontypeId } = ctx.request.body;
  //处理参数
  ctx.request.body = {
    _id: consumptiontypeId
  }

  //业务层处理
  let serviceResult = await deleteconsumptiontype(ctx, next)
  console.log(serviceResult);
  if(serviceResult){
    response(ctx, {}, { message: '删除成功' })
  }else{
    response(ctx, {}, { message: '删除失败',code:'00001' })
  }
}
