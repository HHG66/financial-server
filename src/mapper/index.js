/*
 * @Author: HHG
 * @Date: 2023-02-08 22:40:41
 * @LastEditTime: 2023-03-12 14:22:42
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/mapper/index.js
 * @文件说明: 
 */
/**
 * @description: 封装的查询方法
 * @param {Schema} model
 * @param {*} where
 * @param {*} mapping 对返回的数据做操作，1 为返回，0为不返回
 * @return {*}
 */
const log4js = require("log4js");
const logger = log4js.getLogger();
const find = (model, where, mapping) => (
  model.find(where, mapping).then(rel => {
    return rel
  }).catch(err => {
    console.log('find', err);
    console.error(err)
  })
)

/**
 * @description: 修改数据的公共方法
 * @param {Schema} model
 * @param {*} where
 * @param {*} params
 * @return {*}
 */
const updata = (model, where, params) => (
  model.updateOne(where, params).then(rel => {
    return rel
  }).catch(err => {
    console.log('updata', err);
    console.error(err)
  })
)

/**
 * @description: 增加
 * @param {Schema} model
 * @param {*} params
 * @return {*}
 */
const add = (model, params) => (
  model.create(params).then(rel => {
    return rel
  }).catch(err => {
    console.log('create', err);
    console.error(err)
  })
)

/**
 * @description: 删除的公共方法
 * @param {Schema} model
 * @param {*} where
 * @return {*}
 */
const del = (model, where) => (
  model.findOneAndDelete(where).then(rel => {
    return rel
  }).catch(err => {
    console.log('del', err);
    logger.debug(err) 
    return "err"
    // console.error(err)
  })
)

/**
 * @description: 查询单个数据的方法
 * @param {Schema} model
 * @param {*} where
 * @param {*} ctx
 * @return {*}
 */
const findOne = (model, where, params) => (
  model.findOne(where, params).then(rel => {
    return rel
  }).catch(err => {
    console.log('findOne', err);
    console.error(err)
  })

)

module.exports = {
  find,
  updata,
  add,
  del,
  findOne
}