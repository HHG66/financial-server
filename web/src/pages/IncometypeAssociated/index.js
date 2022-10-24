/*
 * @Author: HHG
 * @Date: 2022-09-01 17:01:29
 * @LastEditTime: 2022-10-23 21:16:42
 * @LastEditors: 韩宏广
 * @FilePath: /个人财务/web/src/pages/IncometypeAssociated/index.js
 * @文件说明: 
 */
import { Space, Table, Tag } from 'antd';

const data = [
  {
    key: '1',
    incomname: 'John Brown',
    incomeassociate: 32,
  },
  {
    key: '2',
    incomname: 'Jim Green',
    incomeassociate: 42,
  },
  {
    key: '3',
    incomname: 'Joe Black',
    incomeassociate: 32,
  },
];
const IncometypeAssociated=()=>{
  const columns = [
    {
      title: '收入名称',
      dataIndex: 'incomname',
      key: 'incomname',
      // render: (text) => <a>{text}</a>,
    },
    {
      title: '关联收入字段名称',
      dataIndex: 'incomeassociate',
      key: 'incomeassociate',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={()=>{edit(record)}}>编辑</a>
          <a onClick={()=>{deletes(record)}}>删除</a>
        </Space>
      ),
    },
  ];
  const edit=(rowdata)=>{
    console.log(rowdata);
  } 
  const deletes=(rowdata)=>{
    console.log(rowdata);
  } 

  return(
    <>
  
    <Table columns={columns} dataSource={data} />
    </>
  )
}

export default IncometypeAssociated