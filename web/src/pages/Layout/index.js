import { Outlet } from 'react-router-dom'
// import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined,UserOutlined,} from '@ant-design/icons';
import { Layout } from 'antd';
import Aside from '@/components/Aside'
import Heade from '@/components/Heade';
import './index.less'
const { Content, Footer } = Layout;


const Layouts = () => {
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Aside />
      <Layout className="site-layout">
        <Heade />
        <Content>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
            padding:'10px 50px'
          }}
        >
          个人财务理财系统，方便处理各种账单，辅助理财。
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Layouts;
