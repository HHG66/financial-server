/*
 * @Author: HHG
 * @Date: 2022-09-05 17:23:49
 * @LastEditTime: 2022-10-20 01:34:20
 * @LastEditors: 韩宏广
 * @FilePath: \my-financial\web\src\store\reducers\index.js
 * @文件说明: 
 */
import UserReducer from './UserReducer.js'
// createStore 适用于单个reducer，多个的情况使用combineReducers方法
import { combineReducers } from 'redux' 

const redecers =combineReducers({
  userInfo:UserReducer
})

export default redecers