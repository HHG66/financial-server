import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "userinfo",
  //初始状态
  initialState: {
    userInfo: {}
  },
  reducers: {
    addInfo: (state,action) => {
      state.userInfo = action.userInfo
    }
  }
})

export const {addInfo}=UserSlice.actions
export default UserSlice.reducer