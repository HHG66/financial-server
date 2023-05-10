const { deletedepositinfo } = require('@/mapper/investment/deposit.js')
module.exports = async (id) => {
  let mapperResult = await deletedepositinfo(id)
  if (mapperResult) {
    return {
      state: true
    }
  } else {
    return {
      state: false
    }
  }
}