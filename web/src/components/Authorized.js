/*
 * @Author: HHG
 * @Date: 2022-09-16 16:37:52
 * @LastEditTime: 2022-09-16 17:28:14
 * @LastEditors: 韩宏广
 * @FilePath: \my-financial\web\src\components\Authorized.js
 * @文件说明: 
 */
import { Navigate } from 'react-router-dom'
import {getLocalStorage } from '@/utils'
const Authorized = ({children}) => {
  if (getLocalStorage("Token")) {
    return <>{children}</>
  }else{
  return <Navigate to="/login" replace />
  }
}

export default Authorized