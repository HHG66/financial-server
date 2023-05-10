const { getDepositList } = require('@/mapper/investment/deposit.js')
module.exports = async (data) => {
  let queryData = {}
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      if (data[key] != undefined) {
        queryData[key] = data[key]
      }
    }
  }
  let mapperResult = await getDepositList({
    ...queryData,
    depositamount:Number(queryData.depositamount)
  })
  if (mapperResult) {
    return {
      state: true,
      data: mapperResult
    }
  } else {
    return {
      state: false,
    }
  }
}