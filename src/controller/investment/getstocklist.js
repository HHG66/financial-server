const serve = require('@/service/investment/getstocklist.js')
module.exports = async (ctx,next) => {
  let result = await serve(ctx)
  if (result.state == true) {
    response(ctx, { data:result.data }, {})
  } else {
    response(ctx, {}, { message: result.message || "请求失败" })
  }
}