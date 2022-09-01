import {Outlet,useNavigate,Link} from 'react-router-dom'
import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined,UserOutlined,} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import Routers from '@/Router/routers'
import './index.css'
const { Header, Content, Footer, Sider } = Layout;

const items = [
  { label: <Link to="/home">概览</Link>, key: '/submenu',  }, // 菜单项务必填写 key
  { label: <Link to="/home1">测试页面1</Link>, key: 'item-2',  },
  {
    label: '子菜单',
    key: 'submenu',
    children: [{ label: '子菜单项', key: 'submenu-item-1', }],
  },
];


const Layouts = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [item,setItem]=useState([])
  useEffect(()=>{
    const children=[]
    Routers.map((router)=>{
      // console.log(router);
      if(router.subs){
        router.subs.map((rou)=>{
          // console.log('---------');
          // console.log(rou);
          children.push([
            {
              label: router.title,
              key: router.key,
            }
          ])
        })
      }

       setItem([{
        label: router.title,
        key: router.key,
        children: children,
      }])
     
      
    })
  },[])
  const onClick=(e)=>{
    console.log(e);
  }
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => {setCollapsed(value)}}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={item}  onClick={onClick}/>
      </Sider>
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
