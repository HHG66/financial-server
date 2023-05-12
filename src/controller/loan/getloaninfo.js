const serve = require('@/service/loan/getloaninfo.js')
module.exports = async (ctx, next) => {
  let result = await serve(ctx.query.loanid)
  if (result.state == true) {
    response(ctx, result.data, {})
  } else {
    response(ctx, {}, { message: '请求失败' })
  }

}