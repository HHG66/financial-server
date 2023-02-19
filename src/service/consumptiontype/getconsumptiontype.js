const { getConsumptiontypeList, getAllConsumptiontypeList } = require('@mapper/consumptiontype/index')
module.exports = async (ctx, next) => {
  let getConsumptiontypeLists
  let { consumptiontypename } = ctx.query
  if (consumptiontypename == '') {
    getConsumptiontypeLists = await getAllConsumptiontypeList()
  } else {
    getConsumptiontypeLists = await getConsumptiontypeList(consumptiontypename)
  }
  return getConsumptiontypeLists
}