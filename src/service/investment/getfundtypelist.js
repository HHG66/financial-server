/*
 * @Author: HHG
 * @Date: 2023-04-10 22:35:16
 * @LastEditTime: 2023-05-01 00:58:10
 * @LastEditors: 韩宏广
 * @FilePath: /server/src/service/investment/getfundtypelist.js
 * @文件说明: 
 */
const { getTianFundLists } = require('@/service/other/thirdpartyapi.js')
const { updataFundTypeList, getAllFundType, updataFundType } = require('@/mapper/investment/index.js')
module.exports = async () => {
  const fundAllList = await getAllFundType()
  let FundtypeListData = await getTianFundLists()
  // console.log(FundtypeListData);
  let FundTypeData = []
  // console.log(FundtypeListData.data.r.length);
  if (fundAllList.length !== 0) {
    let upataNum = 0

    let updataResult = FundtypeListData.data.r.map(async (element) => {
      // let updataResult =
      return await updataFundType(element[0], {
        fundcode: element[0],
        shortname: element[1],
        fundname: element[2],
        fundtype: element[3],
        fundfullname: element[4]
      })
    });
    const resPromise = await Promise.all(updataResult)
    // console.log(resPromise);
    resPromise.forEach(res => {
      if (res.modifiedCount === 1) {
        upataNum += 1
      }
    })
    return { upataNum, state: true }
  } else {
    FundtypeListData.data.r.forEach(element => {
      FundTypeData.push({
        fundcode: element[0],
        shortname: element[1],
        fundname: element[2],
        fundtype: element[3],
        fundfullname: element[4]
      })
    });
    let mapperResult = await updataFundTypeList(FundTypeData)
    return mapperResult

  }

}