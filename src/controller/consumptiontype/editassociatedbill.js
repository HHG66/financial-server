/*
 * @Author: HHG
 * @Date: 2023-02-17 21:21:02
 * @LastEditTime: 2023-02-17 21:21:03
 * @LastEditors: 韩宏广
 * @FilePath: /Personal-finance/src/controller/consumptiontype/editassociatedbill.js
 * @文件说明: 
 */
const editassociatedbill = require('service/consumptiontype/editassociatedbill.js')

module.exports = async (ctx, next) => {
  let respond = []
  //获取参数
  let { consumptiontypeId, consumptiontypename, remarks } = ctx.request.body;
  //处理参数
  ctx.request.body = {
    _id: consumptiontypeId,
    consumptiontypename: consumptiontypename,
    remark: remarks
  }

  //业务层处理
  let serviceResult = await editconsumptiontype(ctx, next)
  //没做分页，这个类型不多，先不做分页
  if (serviceResult.modifiedCount === 1) {
    response(ctx, {}, { message: '修改成功' })
  }
  // console.log(serviceResult);
}
