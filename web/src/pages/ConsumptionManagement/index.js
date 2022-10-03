/*
 * @Author: HHG
 * @Date: 2022-09-01 17:01:17
 * @LastEditTime: 2022-09-30 22:40:07
 * @LastEditors: 韩宏广
 * @FilePath: \my-financial\web\src\pages\ConsumptionManagement\index.js
 * @文件说明: 
 */
import { Table, Form, Input, Row, Col, Button, Space, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons';
import { getConsumptionTypeList } from '@/api/consumptiontype'
import { useEffect, useState } from 'react';
import './index.less'
const ConsumptionManagement = () => {

  let [dataSource, setDataSource] = useState([
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
  ])


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
  const pagination = {
    position: ["bottomRight"],
    total: 100,
    onChange: (page, pageSize) => { getconsumptiontypelist(page, pageSize) },
    // onShowSizeChange:(current,pageSize)=>{getconsumptiontypelist(current,pageSize)},
  }
  //分页改变
  const getconsumptiontypelist = (current, pageSize) => {
    console.log(current, pageSize);
  }

  useEffect(() => {
    // (async function anyNameFunction() {
    //   await getConsumptionTypeList().then((res) => {
    //     console.log(res);
    //     setDataSource(res.data)
    //   });
    // })();

    getConsumptionTypeList().then((res) => {
      console.log(res);
      setDataSource(res.data)
    });
  }, [])


  const onFinish = (values) => {
    console.log('Success:', values);
  };
  function onFinishs(value) {
    console.log(value);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const showSearch = () => {
    console.log(1);
  }
  return (
    <>
      <Form name="basic"
        // labelCol={{ span: 2 }}
        // wrapperCol={{ span: 5 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off">
        <Row gutter={24}>
          <Col span={6} lg={5}>
            <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]} >
              <Input />
            </Form.Item>
          </Col>

          <Col span={6} lg={5}>
            <Form.Item label="Username" name="username2" rules={[{ required: true, message: 'Please input your username!' }]} >
              <Input />
            </Form.Item>
          </Col>

          <Col span={6} lg={5}>
            <Form.Item label="Username" name="username3" rules={[{ required: true, message: 'Please input your username!' }]} >
              <Input />
            </Form.Item>
          </Col>

          <Col span={6} lg={9} className="search-form">
            <Form.Item >
              <Space>
                <Button onClick={() => { onFinishs("123") }} type="primary">Primary Button</Button>
                <Button onClick={showSearch} >Primary Button</Button>
                <Dropdown overlay='' onClick={showSearch}>
                  {/* 链接纯粹为了一个样式 */}
                  <a href='##' onClick={e => e.preventDefault()}>
                    <Space>
                      Hover me
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </Space>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Table dataSource={dataSource} columns={columns} pagination={pagination} />
    </>
  )
}
export default ConsumptionManagement