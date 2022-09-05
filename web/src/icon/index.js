/*
 * @Author: HHG
 * @Date: 2022-09-05 09:21:21
 * @LastEditTime: 2022-09-05 10:00:02
 * @LastEditors: 韩宏广
 * @FilePath: \my-financial\web\src\icon\index.js
 * @文件说明: 
 */
const req = require.context('../icon', true, /\.svg$/);
//路径、是否渗入子目录 匹配规则
const requireAll = requireContext => requireContext.keys().map(requireContext);
requireAll(req);