/*
 * @Author: HHG
 * @Date: 2022-09-01 17:01:17
 * @LastEditTime: 2022-10-22 12:52:11
 * @LastEditors: 韩宏广
 * @FilePath: /个人财务/web/src/pages/ConsumptionManagement/index.js
 * @文件说明: 
 */
import { Table, Form, Input, Row, Col, Button, Space, Dropdown, Modal, message } from 'antd'
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { getConsumptionTypeList, newConsumptionType } from '@/api/consumptiontype'
import { useEffect, useState } from 'react';
import './index.less'
const ConsumptionManagement = () => {

  let [dataSource, setDataSource] = useState([])
  let [formSearch, setFormSearch] = useState(false)
  //对话框
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  //表单
  const [form] = Form.useForm();
  const [searchform] = Form.useForm();

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
  // const pagination = {
  //   position: ["bottomRight"],
  //   total: 100,
  //   onChange: (page, pageSize) => { getconsumptiontypelists(page, pageSize) },
  //   // onShowSizeChange:(current,pageSize)=>{getconsumptiontypelist(current,pageSize)},
  // }
  //分页改变
  // const getconsumptiontypelists = (current, pageSize) => {
  //   console.log(current, pageSize);
  // }

  useEffect(() => {
    // (async function anyNameFunction() {
    //   await getConsumptionTypeList().then((res) => {
    //     console.log(res);
    //     setDataSource(res.data)
    //   });
    // })();

    getConsumptionTypeList({}).then((res) => {
      console.log(res);
      setDataSource(res.data)
    });
  }, [])

  const onReset = () => {
    searchform.resetFields();
  };

  const onFinish = (values) => {
    getConsumptionTypeList(values).then((res) => {
      setDataSource(res.data)
    });
  };

  const showHideSearch = () => {
    if (formSearch === true) {
      setFormSearch(false)
    } else {
      setFormSearch(true)
    }
  }

  //对话框
  const showModal = () => {
    console.log(1);
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    //手动调用表单的校验规则，通过后可以提交
    form.validateFields().then(values => {
      newConsumptionType(values).then(res => {
        if (res.code === "00000") {
          message.success(res.message);
          setConfirmLoading(false);
          setOpen(false)
        }
      })
    }).catch(error => {
      console.log(error);
    })
  };
  return (
    <>

      <Form name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        form={searchform}
        autoComplete="off">
        <Row gutter={24}>
          <Col span={6} lg={5}>
            <Form.Item label="类型名称" name="consumptionName"  >
              <Input />
            </Form.Item>
          </Col>

          {/* <Col span={6} lg={5} className={formSearch === true ? 'search-form' : ''}>
            <Form.Item label="username2" name="username2" rules={[{ required: true, message: 'Please input your username!' }]} >
              <Input />
            </Form.Item>
          </Col> */}

          <Col span={6} lg={9} >
            <Form.Item >
              <Space>
                <Button type="primary" htmlType="submit">查询</Button>
                <Button onClick={onReset}>重置</Button>
                <Dropdown overlay='' onClick={showHideSearch}>
                  {/* 链接纯粹为了一个样式 */}
                  <a href='##'>
                    <Space>
                      {formSearch === true ? "展开" : "收起"}
                      {formSearch === true ? < DownOutlined /> : < UpOutlined />}
                    </Space>
                  </a>
                </Dropdown>
              </Space>
            </Form.Item>
          </Col>
        </Row>
      </Form>

      <Row gutter={24} className='btn-form'>
        <Col span={3} lg={3} offset={21}>
          {/* <Space> */}
            <Button type="primary" onClick={() => showModal()}>+ 新建</Button>
            {/* <Button>设置</Button> */}
          {/* </Space> */}
        </Col>
      </Row>

      <Table dataSource={dataSource} columns={columns} />

      <Modal
        title="Title"
        className='lili'
        bodyStyle={{ display: 'block' }}
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          form={form}
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >
          <Form.Item
            label="消费类型名称"
            name="consumptionName"
            validateTrigger={['onBlur', 'onSubmit']}
            rules={[
              {
                required: true,
                message: '请输入消费类型名称',
              },
            ]
            }
          >
            <Input />
          </Form.Item>

          {/* <Form.Item
            label="Password"
            name=""
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item> */}
        </Form>
      </Modal>

    </>
  )
}
export default ConsumptionManagement