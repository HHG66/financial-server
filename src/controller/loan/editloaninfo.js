const serve = require('@/service/loan/editloaninfo.js')
module.exports = async (ctx, next) => {
  let result = await serve(ctx.request.body)
  if (result.state = true) {
    response(ctx, {}, { message: '修改成功' })
  } else {
    response(ctx, {}, { message: '修改失败' })
  }
}