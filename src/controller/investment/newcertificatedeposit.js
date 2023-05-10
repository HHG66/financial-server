const serve = require('@/service/investment/newcertificatedeposit.js')
module.exports = async (ctx, next) => {
  let result = await serve(ctx)
  if (result.state == true) {
    response(ctx, {}, { message: '新增成功' })
  } else {
    response(ctx, {}, { meaage: "新增失败" })
  }
}