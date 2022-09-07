/*
 * @Author: HHG
 * @Date: 2022-09-01 10:58:19
 * @LastEditTime: 2022-09-06 10:22:56
 * @LastEditors: 韩宏广
 * @FilePath: \my-financial\web\src\components\Aside.js
 * @文件说明: 
 */
import {  Layout, Menu } from 'antd';
import React, { useEffect, useState } from 'react'
import {Link,useLocation} from 'react-router-dom'
import Routers from '@/router/routers';
const {  Sider } = Layout;

const rootSubmenuKeys = ['/consumptiontype', '/incometype', '/balancepayments'];



const Aside=()=>{
  const [collapsed, setCollapsed] = useState(false);
  const [routerItem,setRouterItem]=useState([])
  const [openKeys, setOpenKeys] = useState([]);
  const [defaultSelectedKeys, setdefaultSelectedKeys] = useState(['']);
  const {pathname}=useLocation()
 
  useEffect(()=>{
  // console.log(Routers);
  //将路由表转化成要使用的格式，组Aside
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

  useEffect(()=>{
    console.log(pathname);
    setdefaultSelectedKeys([pathname])
    // const latestOpenKey = pathname.find((key) => openKeys.indexOf(key) === -1);
    rootSubmenuKeys.map((item)=>{
      if(pathname.indexOf(item)!==-1){
        console.log(item);
        // setOpenKeys(item);
        // onOpenChange()
      }
      return item
    })
    // if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
    //   setOpenKeys(pathname);
    // }
  },[pathname])

  //这个地方是只展开一个父级菜单，onOpenChange只在打开有子级导航的时候会触发。
  const onOpenChange = (keys) => {
    console.log(keys);
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const onClick=(e)=>{
    //这里是为了，点击没有子菜单的导航可以将已经展开的导航关闭
    if(e.keyPath.length<2){
    setOpenKeys([])
    }
  }
  return(
    <>
       <Sider collapsible collapsed={collapsed} onCollapse={(value) => {setCollapsed(value)}}>
        <div className="logo" ></div>
        <Menu theme="dark" defaultSelectedKeys={'/home'} selectedKeys={defaultSelectedKeys} mode="inline" items={routerItem}  onClick={onClick}  openKeys={openKeys} onOpenChange={onOpenChange}/>
      </Sider>
    </>
  )
}

export default Aside 