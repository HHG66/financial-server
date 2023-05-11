const { deleteLoan } = require('@/mapper/loan/index.js')
module.exports = async (id) => {
  let mapperResult = await deleteLoan(id)
  if (mapperResult) {
    return {
      state: true,
    }
  } else {
    return {
      state: false,
    }
  }
}