const newassociatedbillname = require('service/consumptiontype/newassociatedbillname.js')

module.exports = async (ctx, next) => {
  let respond = []
  //获取参数
  let { consumptionName, consumptiontypeid } = ctx.request.body;
  //处理参数
  if (consumptionName == '' || consumptiontypeid == "") {
    response(ctx, {}, { message: "请填写数据", code: '00001' })
    return 
  }
  ctx.request.body = {
    consumptionname: consumptionName,
    consumptiontypeid,
  }
  //业务层处理
  let serviceResult = await newassociatedbillname(ctx, next)
  if (serviceResult === false) {
    response(ctx, {}, { message: '未找到消费类型', code: '00001' })
  }else{
    response(ctx, respond,{message:'添加成功'})
  }
}
