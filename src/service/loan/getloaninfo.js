const { getLoanLnfo } = require('@/mapper/loan/index.js')
module.exports = async (loanid) => {
  let mapperResult = await getLoanLnfo(loanid)
  if (mapperResult.length > 0) {
    let { info, ...infos } = mapperResult[0].toObject()
    let data = {}
    data = {
      ...info[0],
      ...infos
    }
    return {
      state: true,
      data: data
    }
  } else {
    return {
      state: false
    }
  }
}
