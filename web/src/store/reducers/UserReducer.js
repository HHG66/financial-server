/*
 * @Author: HHG
 * @Date: 2022-10-19 21:52:56
 * @LastEditTime: 2022-10-21 01:18:46
 * @LastEditors: 韩宏广
 * @FilePath: \my-financial\web\src\store\reducers\UserReducer.js
 * @文件说明: 
 */
import { setLocalStorage } from '@/utils'

const defaultState = {}
const UserReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "addInfo":
      // setLocalStorage("userInfo", action.userInfo)
      return state = Object.assign({}, action.userInfo)
    case "deleteInfo":

      return state = {}
    default:
      return state
  }
}

export default UserReducer