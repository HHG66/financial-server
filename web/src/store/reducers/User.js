import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "userinfo",
  //初始状态
  initialState: {
    userInfo: {},
    Token: ''
  },
  reducers: {
    addInfo: (state, action) => {
      // console.log(action);
      // console.log(action.payload.userinfo);
      state.userInfo = action.payload.userinfo
      state.Token = action.payload.token
    },
    getToken: (state, action) => {
      return state.Token
    }
  }
})

export const { addInfo } = UserSlice.actions
export default UserSlice.reducer