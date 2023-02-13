/*
 * @Author: HHG
 * @Date: 2023-02-08 22:40:41
 * @LastEditTime: 2023-02-12 18:17:05
 * @LastEditors: 韩宏广
 * @FilePath: /koa-cli/src/mapper/index.js
 * @文件说明: 
 */
/**
 * @description: 封装的查询方法
 * @param {Schema} model
 * @param {*} where
 * @param {*} ctx
 * @return {*}
 */
const find = (model, where, ctx, mapping) => (
  model.find(where, mapping).then(rel => {
    return rel
  }).catch(err => {
    ctx.body = {
      code: 400,
      msg: '查询出现异常！'
    }
    console.error(err)
  })
)

/**
 * @description: 修改数据的公共方法
 * @param {Schema} model
 * @param {*} where
 * @param {*} params
 * @param {*} ctx
 * @return {*}
 */
const updata = (model, where, params, ctx) => (
  model.updateOne(where, params).then(rel => {
    return rel
  }).catch(err => {
    ctx.body = {
      code: 400,
      msg: '修改出现异常！'
    }
    console.error(err)
  })
)

/**
 * @description: 增加
 * @param {Schema} model
 * @param {*} params
 * @param {*} ctx
 * @return {*}
 */
const add = (model, params, ctx) => (
  model.create(params).then(rel => {
    if (rel) {
      return rel
    } else {
      ctx.body = {
        code: 300,
        msg: '添加失败',
      }
    }
  }).catch(err => {
    ctx.body = {
      code: 400,
      msg: '添加出现异常！'
    }
    console.error(err)
  })
)

/**
 * @description: 删除的公共方法
 * @param {Schema} model
 * @param {*} where
 * @param {*} ctx
 * @return {*}
 */
const del = (model, where, ctx) => (
  model.findOneAndDelete(where).then(rel => {
    return rel
  }).catch(err => {
    ctx.body = {
      code: 400,
      msg: '删除出现异常！'
    }
    console.error(err)
  })
)

/**
 * @description: 查询单个数据的方法
 * @param {Schema} model
 * @param {*} where
 * @param {*} ctx
 * @return {*}
 */
const findOne = (model, where, ctx, params) => (
  model.findOne(where, params).then(rel => {
    return rel
  }).catch(err => {
    ctx.body = {
      code: 400,
      msg: '查询出现异常！'
    }
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