/*
 * @Author: HHG
 * @Date: 2023-03-21 22:49:06
 * @LastEditTime: 2023-03-21 23:22:34
 * @LastEditors: 韩宏广
 * @FilePath: /Financial/src/mapper/investment/index.js
 * @文件说明: 
 */
const mongoose = require('mongoose')
const { add } = require('../index')
const Fund = require('@/models/fund/idnex.js')
module.exports = {
  newfund: (data) => {
    console.log(data);
    return add(Fund, data)
  }
}