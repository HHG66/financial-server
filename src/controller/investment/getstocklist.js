const serve = require('@/service/investment/getstocklist.js')
module.exports = async (ctx, next) => {
  let result = await serve(ctx)
  console.log(result);
  if (result.state == true) {
    response(ctx, result.data, {})
  } else {
    response(ctx, {}, { message: result.message || "请求失败" })
  }
}