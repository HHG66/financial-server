/*
 * @Author: HHG
 * @Date: 2022-09-10 16:46:32
 * @LastEditTime: 2022-09-10 16:53:35
 * @LastEditors: 韩宏广
 * @FilePath: /个人财务/web/src/components/Router.js
 * @文件说明: 
 */
import { Routes, Route } from 'react-router-dom'
import Layouts from '@/pages/Layout'
import Login from "@/pages/Login"
import Routers from '@/routers'
import NoFound from "@/pages/NoFound"
import { useEffect, useState } from 'react'

const AppRouter = () => {
  let [router,setRouter]=useState([])
  useEffect(()=>{
  let router=  Routers.map((rou) => {
      let _rou=[]
      if (rou.subs) {
        rou.subs.map((children)=>{
        return _rou.push(<Route key={children.key} path={children.key} element={children.component}></Route>)
        })
        return <Route key={rou.key} path={rou.key} element={rou.component}>{[..._rou]}</Route>
      }
      return <Route key={rou.key} path={rou.key} element={rou.component}></Route>
    })
    setRouter(router)
  },[])
  return (
    <>
      <Routes>
        <Route path='/' element={
          <Layouts />
        }>
          {/* 遍历路由表，返回需要的路由列表 */}
          {
           router
          }
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='*' element={<NoFound />}></Route>
      </Routes>
    </>
  )
}

export default AppRouter;