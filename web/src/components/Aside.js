/*
 * @Author: HHG
 * @Date: 2022-09-01 10:58:19
 * @LastEditTime: 2022-09-01 13:06:45
 * @LastEditors: 韩宏广
 * @FilePath: \my-financial\web\src\components\Aside.js
 * @文件说明: 
 */
import {  Layout, Menu } from 'antd';
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Routers from '@/Router/routers';
const {  Sider } = Layout;

const onClick=(e)=>{
  console.log(e);
}

const Aside=()=>{
  const [collapsed, setCollapsed] = useState(false);
  const [routerItem,setRouterItem]=useState([])
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
      })
    }
    return Router
  })
  // console.log(Router);
  setRouterItem(Router)
  },[])
  return(
    <>
       <Sider collapsible collapsed={collapsed} onCollapse={(value) => {setCollapsed(value)}}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={routerItem}  onClick={onClick}/>
      </Sider>
    </>
  )
}

export default Aside 