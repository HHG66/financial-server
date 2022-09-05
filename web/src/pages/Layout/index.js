import { Outlet, useLocation } from 'react-router-dom'
// import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined,UserOutlined,} from '@ant-design/icons';
import { Breadcrumb, Layout, } from 'antd';
import React, { useEffect, useState, useRef } from 'react';
import Aside from '@/components/Aside'
import Routers from '@/router/routers'
import './index.less'
const { Header, Content, Footer, } = Layout;


const Layouts = () => {
  const [breadcrumb, setBreadcrumb] = useState([])
  const [breadcrumbNameMap, setbreadcrumbNameMap] = useState({})
  //useRef用于useState异步无法获取到最后更新的值
  const dataRef = useRef()
  
  const { pathname } = useLocation();
 
  useEffect(() => {
    function callbreadcrumbNameMap (){
     Routers.map((rou) => {
      // console.log(rou);
      if (rou.subs) {
        // console.log(rou.subs);
        rou.subs.map((rouch) => {
          setbreadcrumbNameMap({ ...breadcrumbNameMap }, breadcrumbNameMap[rouch.key] = rouch.title)
          return breadcrumbNameMap
        })
        setbreadcrumbNameMap({ ...breadcrumbNameMap }, breadcrumbNameMap[rou.key] = rou.title)
      } else {
        setbreadcrumbNameMap({ ...breadcrumbNameMap }, breadcrumbNameMap[rou.key] = rou.title)
      }
      return breadcrumbNameMap
    })
  }
    callbreadcrumbNameMap()
    dataRef.current = breadcrumbNameMap
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
 
  useEffect(() => {
    // console.log(dataRef.current);
    // console.log(pathname);
    // console.log(pathname.split('/'));
    //这里写法不太好，暂时先这样做，以后熟悉了react再优化    
    if(pathname.split('/').length===2){
    setBreadcrumb([dataRef.current[pathname]])
    }else{
    setBreadcrumb([ dataRef.current["/"+pathname.split('/')[1]],dataRef.current[pathname]])
    }
  }, [pathname])
   
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Aside />
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >   
        <div className='userInfo'>
          <span>用户名：</span>
          <span>144444</span>
        </div>
        </Header>
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
            {
              breadcrumb.map((Item)=>{
                return   <Breadcrumb.Item key={Item}>{Item}</Breadcrumb.Item>
              })
            }
          </Breadcrumb>
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
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Layouts;
