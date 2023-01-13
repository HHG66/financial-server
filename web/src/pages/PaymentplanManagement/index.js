/*
 * @Author: HHG
 * @Date: 2022-09-01 17:04:01
 * @LastEditTime: 2023-01-13 10:40:52
 * @LastEditors: 韩宏广
 * @FilePath: \financial\web\src\pages\PaymentplanManagement\index.js
 * @文件说明: 
 */
import { useEffect, useState } from 'react'
import { Descriptions, Button, Row, Col, Form, Input, DatePicker } from 'antd'
import { DownOutlined, UpOutlined } from '@ant-design/icons';

import './index.less'

const PaymentplanManagement = () => {
  const [form] = Form.useForm()
  const [year, setYear] = useState('2019')
  const onFinish = (values) => {
    
    console.log(values);
    // setYear
  }
  useEffect(()=>{
    setYear('2023')
  },[])
  return (
    <>
      {/* 主要计划 */}

      <Form
        form={form}
        name="advanced_search"
        className="ant-advanced-search-form"
        onFinish={onFinish}
        labelCol={{
          xl: 4
        }}
      >
        <Row gutter={24}>
          <Col span={6} >
            <Form.Item
              name='annual'
              label='年度'
            >
              <DatePicker picker="year" style={{ width: '100%' }} />
            </Form.Item>
          </Col>
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
          </Col>
        </Row>
      </Form>
      <Descriptions title={year + '年度收入计划'} extra={<Button type="primary">编辑</Button>} className='descriptions' style={{ marginTop: '8px' }}>
        <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
        <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
        <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
        <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
        <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
        <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
        <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
        <Descriptions.Item label="Remark">empty</Descriptions.Item>
        <Descriptions.Item label="Address">
          No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
        </Descriptions.Item>
      </Descriptions>
      <Descriptions title={year + '年度支出计划'} extra={<Button type="primary">编辑</Button>} className='descriptions'>
        <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
        <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
        <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
        <Descriptions.Item label="Remark">empty</Descriptions.Item>
        <Descriptions.Item label="Address">
          No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
        </Descriptions.Item>
      </Descriptions>
      <Descriptions title={year + '年度其他计划'} extra={<Button type="primary">编辑</Button>} className='descriptions'>
        <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
        <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
        <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
        <Descriptions.Item label="Remark">empty</Descriptions.Item>
        <Descriptions.Item label="Address">
          No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
        </Descriptions.Item>
      </Descriptions>
    </>
  )
}

export default PaymentplanManagement