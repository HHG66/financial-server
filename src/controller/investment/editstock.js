const serve = require('@/service/investment/editstock.js')
module.exports = async (ctx, next) => {

  // let {
  //   stockid,
  //   stockstate,//加仓状态，1为加仓，0为减仓或者卖出
  //   number,//数量
  //   price,//价格
  //   operatingtime,//操作时间
  // } = ctx
  let result = await serve(ctx.request.body)
  if (result.state == true) {
    response(ctx, {}, { message: "编辑成功" })
  } else {
    response(ctx, {}, { code: '00001', message: result.message || '编辑失败' })
  }
}