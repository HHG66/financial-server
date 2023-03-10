const { getIncomeTypeList } = require('@/mapper/income/index.js')
module.exports = async (ctx, next) => {
  let result = []
  let incomeList = await getIncomeTypeList(ctx.query.incometypename)
  incomeList.forEach(element => {
    result.push({
      id:element._id,
      name:element.incomename,
      date:element.createdate,
      remarks:element.remarks
    })
  });
  return result
}