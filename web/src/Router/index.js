/*
 * @Author: HHG
 * @Date: 2022-08-31 12:01:58
 * @LastEditTime: 2022-08-31 12:10:19
 * @LastEditors: 韩宏广
 * @FilePath: \my-financial\web\src\Router\index.js
 * @文件说明: 
 */
import { Routes, Route } from 'react-router-dom'
import Layouts from '@/pages/Layout'
import Home from "@/pages/Home"
import Login from "@/pages/Login"
import NoFound from "@/pages/NoFound"

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={
          <Layouts />
        }>
          <Route Route path='/home' element={<Home />}></Route>
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='*' element={<NoFound />}></Route>
      </Routes>
    </>
  )
}

export default AppRouter;