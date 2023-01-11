/*
 * @Author: HHG
 * @Date: 2022-10-04 00:02:13
 * @LastEditTime: 2023-01-11 16:49:03
 * @LastEditors: 韩宏广
 * @FilePath: \financial\web\src\pages\Summary\index.js
 * @文件说明: 
 */
import React, { useEffect, useState } from 'react'
import { Form, Row, Col, Button, Input, Tag, Space, Table, DatePicker } from 'antd'
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { getBillSummaryListApi } from '@/api/Summary'
const Summary = () => {
  const [expand, setExpand] = useState(false);
  const [tabData, setTabData] = useState([])
  const [form] = Form.useForm();
  const onFinish = (values) => {
    // console.log('Received values of form: ', values);
    getbillsummarylist(values)
  };
  
  useEffect(() => {
    getbillsummarylist({})
  }, [])

  const getbillsummarylist = (data) => {
    getBillSummaryListApi(data).then(res => {
      res.data.forEach(element => {
        // ...element,
        element.key = element.billsummaryid
      });
      setTabData(res.data)
    })
  }
  const columns = [
    {
      title: '名称',
      dataIndex: 'billname',
      key: 'billname',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '交易日期',
      dataIndex: 'tradingtime',
      key: 'tradingtime',
    },
    {
      title: '收/支',
      dataIndex: 'incomeexpenditure',
      key: 'incomeexpenditure',
    },
    {
      title: '金额',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: '交易方',
      dataIndex: 'counterparty',
      key: 'counterparty',
    },
    {
      title: '关联收支类型',
      dataIndex: 'associationtype',
      key: 'associationtype',
    },
    // {
    //   title: 'Tags',
    //   key: 'tags',
    //   dataIndex: 'tags',
    //   render: (_, { tags }) => (
    //     <>
    //       {tags.map((tag) => {
    //         let color = tag.length > 5 ? 'geekblue' : 'green';
    //         if (tag === 'loser') {
    //           color = 'volcano';
    //         }
    //         return (
    //           <Tag color={color} key={tag}>
    //             {tag.toUpperCase()}
    //           </Tag>
    //         );
    //       })}
    //     </>
    //   ),
    // },
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
  return (
    <>
      {/* Summary */}
      <Form
        form={form}
        name="advanced_search"
        className="ant-advanced-search-form"
        onFinish={onFinish}
      >
        <Row gutter={24}>
          <Col span={6} >
            <Form.Item
              name='billname'
              label='账单名称'
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={6} >
            <Form.Item
              name='tradingtime'
              label='交易时间'
            >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={6} >
            <Form.Item
              name='amount'
              label='金额'
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={6} >
            <Form.Item
              name='counterparty'
              label='交易方'
            >
              <Input />
            </Form.Item>
          </Col>
          {
            !expand ? (<>
              <Col span={6} >
                <Form.Item
                  name='associationtype'
                  label='关联收支类型'
                >
                  <Input />
                </Form.Item>
              </Col>
            </>) : (<> </>)
          }
        </Row>
        <Row>
          <Col
            span={24}
            style={{
              textAlign: 'right',
            }}
          >
            <Button type="primary" htmlType="submit">
              搜索
            </Button>
            <Button
              style={{
                margin: '0 8px',
              }}
              onClick={() => {
                form.resetFields();
              }}
            >
              重置
            </Button>
            <a
              style={{
                fontSize: 12,
              }}
              onClick={() => {
                setExpand(!expand);
              }}
            >
              {expand ? (<><DownOutlined /> 展开</>) : (<><UpOutlined /> 收回</>)}
            </a>
          </Col>
        </Row>
      </Form>
      <Table columns={columns} dataSource={tabData} />
    </>
  )
}

export default Summary