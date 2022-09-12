/*
 * @Author: HHG
 * @Date: 2022-09-05 09:21:21
 * @LastEditTime: 2022-09-09 12:02:12
 * @LastEditors: 韩宏广
 * @FilePath: /个人财务/web/src/icon/index.js
 * @文件说明: 
 */
const req = require.context('../icon', true, /\.svg$/);
//路径、是否渗入子目录 匹配规则
const requireAll = requireContext => requireContext.keys().map(requireContext);
requireAll(req);