/*
 * @Author: HHG
 * @Date: 2022-09-01 17:01:17
 * @LastEditTime: 2022-09-10 11:15:44
 * @LastEditors: 韩宏广
 * @FilePath: /个人财务/web/src/pages/ConsumptionManagement/index.js
 * @文件说明: 
 */
import { Table } from 'antd'
const ConsumptionManagement = () => {
  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ];

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  return (
    <>
      <Table dataSource={dataSource} columns={columns} />
    </>
  )
}
export default ConsumptionManagement