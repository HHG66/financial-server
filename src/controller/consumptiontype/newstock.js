const serve = require('@/service/investment/newstock.js')
module.exports = async (ctx, next) => {
  let result = await serve(ctx.request.body)
  if (result) {
    response(ctx, {}, { message: '新增成功' })
  }else {
    response(ctx, {}, { message: result.message })
  }
}