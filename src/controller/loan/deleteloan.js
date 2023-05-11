const serve = require('@/service/loan/deleteloan.js')
module.exports = async (ctx, next) => {
  let result = await serve(ctx.request.body.loanid)
  if (result.state == true) {
    response(ctx, {}, { message: '删除成功' })
  } else {
    response(ctx, {}, { message: '删除失败' })
  }
}