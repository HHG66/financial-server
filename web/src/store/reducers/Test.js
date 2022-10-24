/*
 * @Author: HHG
 * @Date: 2022-10-22 12:02:06
 * @LastEditTime: 2022-10-22 12:11:01
 * @LastEditors: 韩宏广
 * @FilePath: /个人财务/web/src/store/reducers/Test.js
 * @文件说明: 
 */
import { createSlice } from "@reduxjs/toolkit";

const TestReducer = createSlice({
  name: 'test',
  initialState: {
    ss: 1
  },
  reducers: {
    addTest: (state, action) => {
      console.log(state);
      console.log(action);
    }
  }
})

export const { addTest } = TestReducer.actions
export default TestReducer.reducer