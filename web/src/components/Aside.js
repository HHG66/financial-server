/*
 * @Author: HHG
 * @Date: 2022-09-01 10:58:19
 * @LastEditTime: 2022-09-04 23:38:35
 * @LastEditors: 韩宏广
 * @FilePath: /个人财务/web/src/components/Aside.js
 * @文件说明: 
 */
import {  Layout, Menu } from 'antd';
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Routers from '@/router/routers';
const {  Sider } = Layout;

const rootSubmenuKeys = ['/consumptiontype', '/incometype', '/balancepayments'];

const onClick=(e)=>{
  console.log(e);
}

const Aside=()=>{
  const [collapsed, setCollapsed] = useState(false);
  const [routerItem,setRouterItem]=useState([])
  const [openKeys, setOpenKeys] = useState([]);
  useEffect(()=>{
  // console.log(Routers);
  const Router=[]
  Routers.map((item)=>{
    if(item.subs){
      const childrens=[]
      item.subs.map((children)=>{
        childrens.push({
          label:<Link to={children.key}>{children.title}</Link>,
          key:children.key,
          icon:children.icon
        })
        return childrens
      })
      Router.push({
        label:item.title,
        key:item.key,
        icon:item.icon,
        children:childrens,
      })
    }else{
      Router.push({
        label: <Link to={item.key}>{item.title}</Link>,
        key:item.key,
        icon:item.icon,
      })
    }
    return Router
  })
  // console.log(Router);
  setRouterItem(Router)
  },[])
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return(
    <>
       <Sider collapsible collapsed={collapsed} onCollapse={(value) => {setCollapsed(value)}}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={routerItem}  onClick={onClick}  openKeys={openKeys} onOpenChange={onOpenChange}/>
      </Sider>
    </>
  )
}

export default Aside 