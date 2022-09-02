/*
 * @Author: HHG
 * @Date: 2022-08-31 12:01:58
 * @LastEditTime: 2022-09-02 09:06:08
 * @LastEditors: 韩宏广
 * @FilePath: \my-financial\web\src\Router\index.js
 * @文件说明: 
 */
import { Routes, Route } from 'react-router-dom'
import Layouts from '@/pages/Layout'
import Login from "@/pages/Login"
// import Home from "@/pages/Home"
// import ConsumptionManagement from "@/pages/ConsumptionManagement"
// import ConsumpAssociated from "@/pages/ConsumpAssociated"
// import IncometypeManagement from "@/pages/IncometypeManagement"
// import IncometypeAssociated from "@/pages/IncometypeAssociated"
// import BalancepaymentsMgement from "@/pages/BalancepaymentsMgement"
// import ExportBill from "@/pages/ExportBill"
// import PaymentplanManagement from "@/pages/PaymentplanManagement"
// import CheckInFormation from "@/pages/CheckInFormation"
// import InvestmentManagement from "@/pages/InvestmentManagement"
// import AssetStatistics from "@/pages/AssetStatistics"
import Routers from './routers'
import NoFound from "@/pages/NoFound"

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={
          <Layouts />
        }>
          {/* 遍历路由表，返回需要的路由列表 */}
          {
            Routers.map((rou) => {
              let _rou=[]
              if (rou.subs) {
                rou.subs.map((children)=>{
                return _rou.push(<Route key={children.key} path={children.key} element={children.component}></Route>)
                })
                return <Route key={rou.key} path={rou.key} element={rou.component}>{[..._rou]}</Route>
              }
              return <Route key={rou.key} path={rou.key} element={rou.component}></Route>
            })
          }
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='*' element={<NoFound />}></Route>
      </Routes>
    </>
  )
}

export default AppRouter;