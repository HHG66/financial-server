/*
 * @Author: HHG
 * @Date: 2022-09-16 16:37:52
 * @LastEditTime: 2022-12-20 13:19:19
 * @LastEditors: 韩宏广
 * @FilePath: \my-financial\web\src\components\Authorized.js
 * @文件说明: 
 */
import { Navigate } from 'react-router-dom'
import { getLocalStorage } from '@/utils'
// import { useLocation } from 'react-router-dom'
const Authorized = ({ children }) => {
  // const { pathname } = useLocation()
  if (getLocalStorage("Token")) {
    // console.log(pathname);
    // console.log(getLocalStorage("linearAsyncRou"));
    // var isrouter = {}
    // getLocalStorage("linearAsyncRou").forEach(element => {
    //   if (element.key == pathname) {
    //     isrouter = element
    //   }
    // });
    // console.log(Object.keys(isrouter).length === 0);
    // console.log(isrouter);
    // if (Object.keys(isrouter).length === 0) {
    //   return  <Navigate to="/login" replace />
    // } else {
      // console.log(children);
      return <>{children}</>
    // }
  } else {
    return <Navigate to="/login" replace />
  }
}

export default Authorized