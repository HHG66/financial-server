const { getLoanInfoList } = require('@/mapper/loan/index.js')
module.exports = async (id) => {
  let mapperResult = await getLoanInfoList(id)
  if (getLoanInfoList) {
    return {
      state: true,
      data: mapperResult
    }
  } else {
    return {
      state: true
    }
  }
}