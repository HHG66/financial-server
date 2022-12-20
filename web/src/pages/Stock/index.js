/*
 * @Author: HHG
 * @Date: 2022-10-03 23:59:58
 * @LastEditTime: 2022-12-20 22:21:39
 * @LastEditors: 韩宏广
 * @FilePath: /个人财务/web/src/pages/Stock/index.js
 * @文件说明: 
 */
import React, { Component, useState } from 'react'
import { Tag, Space, Table, Row, Col, Form, Input, Button, Modal, Select, InputNumber, Popconfirm } from 'antd'

const Stock = () => {
  const [showModal, setShowModel] = useState(false)
  const [stockInfo, setStockInfo] = useState(false)
  const [formModel] = Form.useForm()
  const columns = [
    {
      title: '买入日期',
      dataIndex: 'name',
      key: 'name',
      width:100,
      render: (text) => <a>{text}</a>,
    },
    {
      title: '股票代码',
      dataIndex: 'age',
      key: 'age',
      width:100
    },
    {
      title: '名称',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '数量',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '成本',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '当前价格',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '当前盈亏',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '盈亏',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '手续费',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '操作',
      key: 'action',
      width: 130,
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => editStock()}>编辑</a>
          <Popconfirm
            title="确定删除股票?"
            onConfirm={() => deleteStock(record)}
            okText="确定"
            cancelText="取消"
          >
            <a >删除</a>
          </Popconfirm>
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

  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const editStock = () => {
    setShowModel(true)
  }

  const editOnFinish = () => {

  }
  const handleOk = () => {

  }
  const handleCancel = () => {
    setShowModel(false)
  }
  const handleChange = (value) => {
    if (value == 2) {
      setStockInfo(false)
    } else {
      setStockInfo(true)
    }
  }
  const deleteStock = () => {
    console.log("deleteStock");
  }
  return (
    <>
      <Row>

        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Space>
            <Col>
              <Form.Item
                label="股票名称"
                name="username"
              >
                <Input />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                label="股票代码"
                name="password"
              >
                <Input />
              </Form.Item>
            </Col>
            <Col>
              <Space>
                <Button htmlType='submit' type='primary'>查询</Button>
                <Button htmlType='reset' type='primary'>重置</Button>
              </Space>
            </Col>
          </Space>
        </Form>
      </Row>
      <Table columns={columns} dataSource={data} />

      <Modal title="操作" open={showModal} onOk={handleOk} onCancel={handleCancel}>
        <Form
          name="basic"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{ sellingnumber: 1, addnumber: 1 }}
          form={formModel}
          onFinish={editOnFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="状态"
            name="fundstate"
            rules={[
              {
                required: true,
                message: '请选择状态',
              },
            ]}
          >
            <Select
              // defaultValue="0"
              // initialValues={{value:'0'}}
              // style={{ width: 120 }}
              onChange={handleChange}
              options={[
                {
                  value: '2',
                  label: '加仓',
                },
                {
                  value: '1',
                  label: '卖出',
                },
              ]}
            />
          </Form.Item>

          {
            stockInfo ? (
              <>
                <Form.Item
                  label="卖出价格"
                  name="sellingprice"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="卖出数量"
                  name="sellingnumber"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                >
                  {/* 数字输入需要动态获取最大数量 max={}  */}
                  <InputNumber min={1} className="input-number" />
                </Form.Item>
              </>
            ) : (
              <>
                <Form.Item
                  label="加仓数量"
                  name="addnumber"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                >
                  {/* <Input /> */}
                  <InputNumber min={1} className="input-number" />
                </Form.Item>
                <Form.Item
                  label="价格"
                  name="price"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </>
            )
          }
        </Form>
      </Modal>
    </>
  )
}

export default Stock