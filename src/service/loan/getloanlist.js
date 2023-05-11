const { getLoanList } = require('@/mapper/loan/index.js')
module.exports = async (data) => {
  // let { } = data
  let mapperResult = await getLoanList({})
  if (mapperResult) {
    return {
      state: true,
      data: mapperResult
    }
  } else {
    return {
      state: false
    }
  }
}