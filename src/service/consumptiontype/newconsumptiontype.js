const { inserConsumptiontype, findOneConsumptiontype } = require('mapper/consumptiontype/index')

module.exports = async (ctx, next) => {
  // console.log(ctx.request.body);
  let result = {}
  let modelDate = {
    createdate: new Date(),
    consumptiontypename: ctx.request.body.consumptiontypename
  }
  let findOneConsumptiontypes = await findOneConsumptiontype(ctx.request.body.consumptiontypename)
  if (findOneConsumptiontypes) {
    result.state = 0
    result.message = '添加的消费类型名称已存在'
  } else {
    let insertResult = await inserConsumptiontype(modelDate)
    if (insertResult) {
      result.state = 1
      result.message = '添加成功'
    } else {
      result.state = 2
      result.message = '添加失败'
    }
  }
  // console.log(insertResult);
  //返回结果.不需要做数据处理，交给controller处理
  return result
}