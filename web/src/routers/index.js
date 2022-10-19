import Home from '@/pages/Home'
import ConsumptionManagement from '@/pages/ConsumptionManagement'
import ConsumpAssociated from '@/pages/ConsumpAssociated'
import IncometypeManagement from '@/pages/IncometypeManagement'
import IncometypeAssociated from '@/pages/IncometypeAssociated'
import BalancepaymentsMgement from '@/pages/BalancepaymentsMgement'
import ExportBill from '@/pages/ExportBill'
import PaymentplanManagement from '@/pages/PaymentplanManagement'
import BalancepaymentsImportBill from '@/pages/BalancepaymentsImportBill'
import Funds from '@/pages/Funds'
import Stock from '@/pages/Stock'
import Deposits from '@/pages/Deposits'
import Summary from '@/pages/Summary'



import AssetStatistics from '@/pages/AssetStatistics'
import SvgIcon from '@/components/Icon'
// import {
//   HomeOutlined,
// } from '@ant-design/icons';
const Routers = [
  // 菜单相关路由
  {
    key: '/home',
    title: '首页',
    icon: <div><SvgIcon iconClass="home" style={{ width: "20px", height: "20px", marginRight: '10px', }} /></div>, component: <Home />
  },
  {
    key: '/consumptiontype',
    title: "消费类型",
    icon: <div><SvgIcon iconClass="consumptiontype" style={{ width: "20px", height: "20px", color: "white", marginRight: '10px', }} /></div>,
    subs: [
      { key: '/consumptiontype/management', title: '消费类型管理', component: <ConsumptionManagement /> },
      { key: '/consumptiontype/associated', title: '关联账单消费名称', component: <ConsumpAssociated /> },
    ],
  },
  {
    key: '/incometype',
    title: '收入类型',
    icon: <div><SvgIcon iconClass="incometype" style={{ width: "23px", height: "23px", marginRight: '10px' }} /></div>,
    subs: [
      { key: '/incometype/management', title: '收入类型管理', component: <IncometypeManagement /> },
      { key: '/incometype/associated', title: '关联收入账单名称', component: <IncometypeAssociated /> },
    ],
  },
  {
    key: '/balancepayments',
    title: '收支情况',
    icon: <div> <SvgIcon iconClass="balancepayments" style={{ width: "20px", height: "20px", marginRight: '10px' }} /></div>,
    subs: [
      { key: '/balancepayments/management', title: '收支情况记录', component: <BalancepaymentsMgement /> },
      { key: '/balancepayments/importBill', title: '导入账单', component: <BalancepaymentsImportBill /> },
    ],
  },
  {
    key: '/investmentmanagement',
    title: '投资信息管理',
    icon:
      <div>
        <SvgIcon iconClass="investmentmanagement" style={{ width: "20px", height: "20px", marginRight: '10px' }} />
      </div>,
    // component: <InvestmentManagement />,
    subs: [
      { key: '/investmentmanagement/funds', title: '基金', component: <Funds /> },
      { key: '/investmentmanagement/stock', title: '股票', component: < Stock /> },
      { key: '/investmentmanagement/deposits', title: '定期存款', component: <Deposits /> },
    ],
  },
  {
    key: '/checkInformation',
    title: '对账信息',
    icon:
      <div>
        <SvgIcon iconClass="checkInformation" style={{ width: "17px", height: "17px", marginRight: '13px' }} />
      </div>,
    // component: <CheckInFormation />
    subs: [
      { key: '/checkInformation/summary', title: '对账汇总', component: <Summary /> },
      { key: '/checkInformation/exportbill', title: '导出账单', component: <ExportBill /> },
    ],
  },
  {
    key: '/paymentplanmanagement',
    title: '收支计划管理',
    icon: <div>
      <SvgIcon iconClass="paymentplanmanagement" style={{ width: "20px", height: "20px", marginRight: '10px' }} />
    </div>,
    component: <PaymentplanManagement />
  },
  {
    key: '/assetstatistics',
    title: '资产统计',
    icon:
      <div>
        <SvgIcon iconClass="assetstatistics" style={{ width: "20px", height: "20px", padding: '1px', marginRight: '10px' }} />
      </div>,
    component: <AssetStatistics />
  },
]

export default Routers