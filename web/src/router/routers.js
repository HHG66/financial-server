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
const Routers = [
  // 菜单相关路由
  { key: '/home', title: '首页', icon: 'mobile',component:<Home/>},
  {
    key: '/consumptiontype',
    title: '消费类型',
    icon: '',
    subs: [
      { key: '/consumptiontype/management', title: '消费类型管理', component: <ConsumptionManagement/> },
      { key: '/consumptiontype/associated', title: '关联账单消费名称', component: <ConsumpAssociated/> },
    ],
  },
  {
    key: '/incometype',
    title: '收入类型',
    icon: '',
    subs: [
      { key: '/incometype/management', title: '收入类型管理', component: <IncometypeManagement/> },
      { key: '/incometype/associated', title: '关联收入账单名称', component: <IncometypeAssociated/> },
    ],
  },
  {
    key: '/balancepayments',
    title: '收支情况',
    icon: '',
    subs: [
      { key: '/balancepayments/management', title: '收支情况记录', component: <BalancepaymentsMgement/> },
      { key: '/balancepayments/exportbill', title: '导出账单', component: <ExportBill/>},
    ],
  },
  { key: '/paymentplanmanagement',  title: '收支计划管理', icon: '',component: <PaymentplanManagement/>},
  { key: '/checkInformation',  title: '对账信息', icon: '',component: <CheckInFormation/> },
  { key: '/investmentmanagement',  title: '投资信息管理', icon: '',component: <InvestmentManagement/>},
  { key: '/assetstatistics',  title: '资产统计', icon: '',component: <AssetStatistics/>},
]

export default Routers