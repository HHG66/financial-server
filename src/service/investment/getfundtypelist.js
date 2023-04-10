/*
 * @Author: HHG
 * @Date: 2023-04-10 22:35:16
 * @LastEditTime: 2023-04-10 23:52:50
 * @LastEditors: 韩宏广
 * @FilePath: /server/src/service/investment/getfundtypelist.js
 * @文件说明: 
 */
const { getTianFundLists } = require('@/service/other/thirdpartyapi.js')
const { updataFundTypeList } = require('@/mapper/investment/index.js')
module.exports = async () => {
  let FundtypeListData = await getTianFundLists()
  // console.log(FundtypeListData);
  let FundTypeData = []
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