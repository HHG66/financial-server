const serve = require('@/service/loan/getloaninfolist.js')
module.exports = async (ctx, next) => {
  let result = await serve(ctx.query.id)
  if (result.state == true) {
    response(ctx, result.data, {})
  } else {
    response(ctx, {}, { message: "获取失败" })
  }
}