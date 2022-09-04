/*
 * @Author: HHG
 * @Date: 2022-09-02 13:13:54
 * @LastEditTime: 2022-09-02 16:51:42
 * @LastEditors: 韩宏广
 * @FilePath: \my-financial\web\src\api\index.js
 * @文件说明: 
 */

import axios from "axios";
import {  notification } from 'antd';


let request=axios.create({
  baseURL:"http://49.234.54.90:3001/mock/33/api",
  timeout: 1000
})

//请求先拦截器
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  config.headers['auth-token']='123'
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
request.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  if(response.data.code==="00000" && response.desc==="success"){
    return response.data
  }
  // return response;
}, function (error) {
  console.log(error);
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  //重定向
  if(error.response.status===401){
    window.location.href='/login'
  }else if(error.response.status===502){
    notification.open({
      message: '网络错误',
      type:"error",
      description:
        '请检查网络后重试，错误码（502）',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  }
  return Promise.reject(error);
});

export default request