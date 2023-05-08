
const serve = require('@/service/investment/newstock.js')
module.exports = async (ctx, next) => {
  let { stockcode, stockprice, stocknum, operatingtime } = ctx.request.body
  let result = await serve({ stockcode, stockprice, stocknum, operatingtime })
  if (result.state == true) {
    response(ctx, {}, { message: "新增成功" })
  } else {
    response(ctx, {}, { message: "新增失败，请重试" })
  }
}