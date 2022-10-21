/*
 * @Author: HHG
 * @Date: 2022-10-19 22:50:31
 * @LastEditTime: 2022-10-21 12:21:20
 * @LastEditors: 韩宏广
 * @FilePath: \my-financial\web\src\store\index.js
 * @文件说明: 
 */
import { createStore, applyMiddleware, compose } from "redux"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import redecers from "./reducers/index"
import thunk from "redux-thunk"
//toolkit
import { configureStore } from "@reduxjs/toolkit"
import UserSlice from "./reducers/User"

// const persistConfig = {
//   key: 'root',
//   storage,
// }
// const persistedReducer = persistReducer(persistConfig, redecers)
//没有redux调试工具
// export const store = createStore(
//   persistedReducer,
//   redecers,
//   {},
//   applyMiddleware(thunk),
// )
//有redux调试工具
// export const store = createStore(
//   persistedReducer,
//   compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   ),//插件调试，未安装会报错
// )
// export const persistor = persistStore(store)


//redux-toolkit
const persistConfig = {
  key: 'root',
  storage,
}
const UserPersistedReducer = persistReducer(persistConfig, UserSlice)
export const store= configureStore({
  reducer:{
    userinfo:UserSlice
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false
    });
  },
})

// export const store = createStore(
//   persistedReducer,
//   compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   ),//插件调试，未安装会报错
// )

// export const persistor = persistStore(store)



