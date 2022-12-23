/*
 * @Author: HHG
 * @Date: 2022-10-03 23:59:58
 * @LastEditTime: 2022-12-23 13:12:59
 * @LastEditors: 韩宏广
 * @FilePath: \my-financial\web\src\pages\Stock\index.js
 * @文件说明: 
 */
import React, { Component, useEffect, useState } from 'react'
import { Tag, Space, Table, Row, Col, Form, Input, Button, Modal, Select, InputNumber, Popconfirm } from 'antd'
import { getStockListApi } from '@/api/stock'

const Stock = () => {
  const [showModal, setShowModel] = useState(false)
  const [stockInfo, setStockInfo] = useState(false)
  const [stockList, setStockList] = useState([])
  const [formModel] = Form.useForm()
  const columns = [
    {
      title: '买入日期',
      dataIndex: 'buydate',
      key: 'buydate',
      // width: 100,
      render: (text) => <a>{text}</a>,
    },
    {
      title: '股票代码',
      dataIndex: 'stockcode',
      key: 'stockcode',
      // width: 100
    },
    {
      title: '名称',
      dataIndex: 'stockname',
      key: 'stockname',
    },
    {
      title: '数量',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: '状态',
      dataIndex: 'stockstate',
      key: 'stockstate',
    },
    {
      title: '成本',
      dataIndex: 'cost',
      key: 'cost',
    },
    {
      title: '当前价格',
      dataIndex: 'currentprice',
      key: 'currentprice',
    },
    {
      title: '当前盈亏',
      dataIndex: 'currentprofitloss',
      key: 'currentprofitloss',
    },
    {
      title: '盈亏',
      dataIndex: 'profitloss',
      key: 'profitloss',
    },
    {
      title: '手续费',
      dataIndex: 'poundage',
      key: 'poundage',
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
  useEffect(() => {
    getStockListApi({}).then(res => {
      let list =[]
      res.data.forEach(element => {
        element.key=element.id 
        list.push(element)
      });
      setStockList(list)
    })
  }, [])
  const onFinish = (values) => {
    // console.log('Success:', values);
    getStockListApi(values).then(res => {
      setStockList(res.data)
    })
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
                name="stockname"
              >
                <Input />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                label="股票代码"
                name="stockcode"
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
      <Table columns={columns} dataSource={stockList} />

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