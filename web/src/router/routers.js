import Home from '@/pages/Home'
import ConsumptionManagement from '@/pages/ConsumptionManagement'
import ConsumpAssociated from '@/pages/ConsumpAssociated'
import IncometypeManagement from '@/pages/IncometypeManagement'
import IncometypeAssociated from '@/pages/IncometypeAssociated'
import BalancepaymentsMgement from '@/pages/BalancepaymentsMgement'
import ExportBill from '@/pages/ExportBill'
import PaymentplanManagement from '@/pages/PaymentplanManagement'
import CheckInFormation from '@/pages/CheckInFormation'
import InvestmentManagement from '@/pages/InvestmentManagement'
import AssetStatistics from '@/pages/AssetStatistics'

import SvgIcon from '@/components/Icon'

const Routers = [
  // 菜单相关路由
  { key: '/home', title: '首页', icon: <SvgIcon iconClass="home" style={{ width: "25px", height: "20px" }} />, component: <Home /> },
  {
    key: '/consumptiontype',
    title: '消费类型',
    icon: <SvgIcon iconClass="consumptiontype" style={{ width: "25px", height: "25px", color: "white" }} />,
    subs: [
      { key: '/consumptiontype/management', title: '消费类型管理', component: <ConsumptionManagement /> },
      { key: '/consumptiontype/associated', title: '关联账单消费名称', component: <ConsumpAssociated /> },
    ],
  },
  {
    key: '/incometype',
    title: '收入类型',
    icon: <SvgIcon iconClass="incometype" style={{ width: "25px", height: "25px" }} />,
    subs: [
      { key: '/incometype/management', title: '收入类型管理', component: <IncometypeManagement /> },
      { key: '/incometype/associated', title: '关联收入账单名称', component: <IncometypeAssociated /> },
    ],
  },
  {
    key: '/balancepayments',
    title: '收支情况',
    icon: <SvgIcon iconClass="balancepayments" style={{ width: "25px", height: "20px" }} />,
    subs: [
      { key: '/balancepayments/management', title: '收支情况记录', component: <BalancepaymentsMgement /> },
      { key: '/balancepayments/exportbill', title: '导出账单', component: <ExportBill /> },
    ],
  },
  { key: '/paymentplanmanagement', title: '收支计划管理', icon: <SvgIcon iconClass="paymentplanmanagement" style={{ width: "25px", height: "23px" }} />, component: <PaymentplanManagement /> },
  { key: '/checkInformation', title: '对账信息', icon: <SvgIcon iconClass="checkInformation" style={{ width: "25px", height: "20px" }} />, component: <CheckInFormation /> },
  { key: '/investmentmanagement', title: '投资信息管理', icon: <SvgIcon iconClass="investmentmanagement" style={{ width: "25px", height: "25px" }} />, component: <InvestmentManagement /> },
  { key: '/assetstatistics', title: '资产统计', icon: <SvgIcon iconClass="assetstatistics" style={{ width: "25px", height: "20px" }} />, component: <AssetStatistics /> },
]

export default Routers