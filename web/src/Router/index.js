/*
 * @Author: HHG
 * @Date: 2022-08-31 12:01:58
 * @LastEditTime: 2022-09-01 17:32:11
 * @LastEditors: 韩宏广
 * @FilePath: \my-financial\web\src\Router\index.js
 * @文件说明: 
 */
import { Routes, Route } from 'react-router-dom'
import Layouts from '@/pages/Layout'
import Home from "@/pages/Home"
import Login from "@/pages/Login"
import ConsumptionManagement from "@/pages/ConsumptionManagement"
import ConsumpAssociated from "@/pages/ConsumpAssociated"
import IncometypeManagement from "@/pages/IncometypeManagement"
import IncometypeAssociated from "@/pages/IncometypeAssociated"
import BalancepaymentsMgement from "@/pages/BalancepaymentsMgement"
import ExportBill from "@/pages/ExportBill"
import PaymentplanManagement from "@/pages/PaymentplanManagement"
import CheckInFormation from "@/pages/CheckInFormation"
import InvestmentManagement from "@/pages/InvestmentManagement"
import AssetStatistics from "@/pages/AssetStatistics"
import Routers from './routers'
import NoFound from "@/pages/NoFound"

const AppRouter = () => {
  return (
    <>
        <Routes>
          <Route path='/' element={
            <Layouts />
          }>
            {
              Routers.map((rou)=>{
                return `<Route Route path={${rou.key}} element={<${rou.component}/>}></Route>`
              })
            }

            {/* 首页 */}
            <Route Route path='/home' element={<Home/>}></Route>
            {/* 消费类型管理 */}
            <Route Route path='/consumptiontype/management' element={<ConsumptionManagement />}></Route>
            <Route Route path='consumptiontype/associated' element={<ConsumpAssociated />}></Route>
            {/* 收入类型管理 */}
            <Route Route path='/incometype/management' element={<IncometypeManagement />}></Route>
            <Route Route path='/incometype/associated' element={<IncometypeAssociated />}></Route>
            {/* 收支情况记录 */}
            <Route Route path='/balancepayments/management' element={<BalancepaymentsMgement />}></Route>
            <Route Route path='/balancepayments/exportbill' element={<ExportBill />}></Route>
            {/* 收支计划管理 */}
            <Route Route path='/paymentplanmanagement' element={<PaymentplanManagement />}></Route>
            {/* 对账信息 */}
            <Route Route path='/checkInformation' element={<CheckInFormation />}></Route>
            {/* 投资信息管理 */}
            <Route Route path='/investmentmanagement' element={<InvestmentManagement />}></Route>
            {/* 资产统计 */}
            <Route Route path='/assetstatistics' element={<AssetStatistics />}></Route>
          </Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='*' element={<NoFound />}></Route>
        </Routes>
    </>
  )
}

export default AppRouter;