const server = require('@/service/investment/getdepositlist.js')
module.exports = async (ctx, next) => {
  let { startdate, enddate, depositname, depositamount } = ctx.query
  let result = await server({ startdate, enddate, depositname, depositamount })
  if (result.state == true) {
    response(ctx, result.data, {})
  } else {
    response(ctx, {}, { message: '获取失败' })
  }
}