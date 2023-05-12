const serve = require('@/service/loan/editloaninfolist.js')
module.exports = async (ctx, next) => {
  let result = await editloaninfolist(ctx.request.body)
  if (result.state == true) {
    response(ctx, {}, { message: '修改成功' })
  } else {
    response(ctx, {}, { code: "00001", message: '修改失败' })
  }
}