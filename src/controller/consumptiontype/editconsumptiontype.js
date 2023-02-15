/*
 * @Author: HHG
 * @Date: 2023-02-15 22:22:13
 * @LastEditTime: 2023-02-15 22:47:50
 * @LastEditors: 韩宏广
 * @FilePath: /Personal-finance/src/controller/consumptiontype/editconsumptiontype.js
 * @文件说明: 
 */
const editconsumptiontype = require('service/consumptiontype/editconsumptiontype.js')
const mapper = require('mapper/consumptiontype/index.js');

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
