/*
 * @Author: HHG
 * @Date: 2022-10-04 00:00:16
 * @LastEditTime: 2023-01-04 20:55:27
 * @LastEditors: 韩宏广
 * @FilePath: /个人财务/web/src/pages/Deposits/index.js
 * @文件说明: 
 */
import React, { Component } from 'react'
import { Statistic, Row, Col, Button, Tag, Space, Table } from 'antd'

const Deposits = () => {
  const columns = [
    {
      title: '存款名称',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '金额(¥)',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '利率',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '备注',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '类型',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          <Tag color={"red"} key={tags}>
            {"定期存款"}
          </Tag>
        </>
      ),
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>编辑</a>
          <a>删除</a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  return (
    <>
      {/* <div>Deposits</div> */}

      <Row gutter={16}>
        <Col span={12}>
          <Statistic title="总存款¥" value={112893} />
        </Col>
        <Col span={12}>
          说明：总金额计算的是本金，不包含没有结清的利息收入。
        </Col>
      </Row>
      <Table columns={columns} dataSource={data} />
    </>
  )
}

export default Deposits