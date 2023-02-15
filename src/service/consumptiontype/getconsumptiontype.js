const { getConsumptiontypeList } = require('mapper/consumptiontype/index')
module.exports = (ctx, next) => {

  let { consumptiontypename } = ctx.query
  let getConsumptiontypeLists = await getConsumptiontypeList(consumptiontypename)

  return getConsumptiontypeLists
}