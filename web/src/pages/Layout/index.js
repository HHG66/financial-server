import {Outlet,Route,Switch} from 'react-router-dom'
// import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined,UserOutlined,} from '@ant-design/icons';
import { Breadcrumb, Layout,  } from 'antd';
import React, { useEffect } from 'react';
import Aside from '@/components/Aside'
// import Routers from '@/Router/routers'
import './index.css'
const { Header, Content, Footer,  } = Layout;


const Layouts = () => {
  // const [item,setItem]=useState([])
  useEffect(()=>{
    
  },[])

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Aside/>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet/>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Layouts;
