const server = require('@/service/income/deleteincometype.js')
module.exports = async (ctx, next) => {
  let { incometypeid } = ctx.request.body
  if (incometypeid != '') {
    ctx.request.body = {
      _id: incometypeid
    }
  } else {
    response(ctx, {}, { message: '请选择删除的数据' })
  }

  const result = await server(ctx, next)
  if (result!='err') {
    response(ctx, {}, { message: '删除成功' })
  }else{
    response(ctx, {}, { message: '删除失败' })
  }
}