const { getStockList } = require('@/mapper/investment/stock.js')
module.exports = async (ctx, next) => {
  console.log(ctx.query)

  let mapperResult = await getStockList(ctx.query)

  if (mapperResult) {
    return {
      state: true,
      data: mapperResult
    }
  } else {
    return {
      state: false,
      message:"股票列表查询错误",
      data: {}
    }
  }


}