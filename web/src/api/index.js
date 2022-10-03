/*
 * @Author: HHG
 * @Date: 2022-09-02 13:13:54
 * @LastEditTime: 2022-09-30 22:07:02
 * @LastEditors: 韩宏广
 * @FilePath: \my-financial\web\src\api\index.js
 * @文件说明: 
 */

import axios from "axios";
import { notification, message } from 'antd';


let request = axios.create({
  // baseURL:"http://49.234.54.90:3001/mock/33/api",
  baseURL: "http://127.0.0.1:4523/m1/1605761-0-default/",
  timeout: 1000
})

//请求先拦截器
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  config.headers['auth-token'] = '123'
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
request.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  if (response.data.code === "00000" && response.data.desc === "success") {
    return response.data
  } else if (response.data.code === "00000" && response.data.desc === "error") {
    message.error(response.data.message);
    return response.data
  }
  // return response;
}, function (error) {
  console.log(error);
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
 // 请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围
  if (error && error.response) {
    switch (error.response.status) {
      case 401:
        window.location.href = '/login'
        break;
      case 502:
        notification.open({
          message: '网络错误',
          type: "error",
          description:
            '请检查网络后重试，错误码（502）',
          onClick: () => {
            console.log('Notification Clicked!');
          },
        });
        break;
      default:

        break;
    }
  } else if(error.request){
    var processingMessage=''
    var processingDesc=''
    if(error.code==="ECONNABORTED"){
      processingMessage= "网络错误"
      processingDesc="请求超时，请检查网络"
    }
    notification.open({
      message:processingMessage,
      type: "error",
      description: processingDesc,
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  }else {
    // 发送请求时出了点问题
    console.log('Error', error.message);
  }
  return Promise.reject(error);
});

export default request