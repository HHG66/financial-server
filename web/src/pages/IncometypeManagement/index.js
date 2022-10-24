/*
 * @Author: HHG
 * @Date: 2022-09-01 17:01:31
 * @LastEditTime: 2022-10-23 20:57:07
 * @LastEditors: 韩宏广
 * @FilePath: /个人财务/web/src/pages/IncometypeManagement/index.js
 * @文件说明: 
 */
import { Row, Space, Table, Tag, Col, Button, Form, Modal, Input, message, Popconfirm } from 'antd';
import { useEffect, useState } from 'react';
import { newIncometype, deleteIncomeType, getIncomeTypeList } from '@/api/incometype'

const IncometypeManagement = () => {
  const columns = [
    {
      title: '收入类型名称',
      dataIndex: 'incometypename',
      key: 'incometypename',
      // render: (text) => <a>{text}</a>,
    },
    {
      title: '创建时间',
      dataIndex: 'data',
      key: 'data',
    },
    // {
    //   title: 'cjia',
    //   dataIndex: 'age',
    //   key: 'age',
    // },
    // {
    //   title: 'Address',
    //   dataIndex: 'address',
    //   key: 'address',
    // },
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
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => { editIncomeType(record) }}>编辑 </a>
          <Popconfirm
            title="确定要删除吗?"
            onConfirm={() => deleteIncomeTypes(record)}
            // onCancel={cancel}
            okText="删除"
            cancelText="取消"
          >
            <a >删除</a>
          </Popconfirm>

        </Space>
      ),
    },
  ];
  const data = [
    // {
    //   key: '1',
    //   name: 'John Brown',
    //   age: 32,
    //   address: 'New York No. 1 Lake Park',
    //   tags: ['nice', 'developer'],
    // },
    // {
    //   key: '2',
    //   name: 'Jim Green',
    //   age: 42,
    //   address: 'London No. 1 Lake Park',
    //   tags: ['loser'],
    // },
    // {
    //   key: '3',
    //   name: 'Joe Black',
    //   age: 32,
    //   address: 'Sidney No. 1 Lake Park',
    //   tags: ['cool', 'teacher'],
    // },
  ];
  const [open, setOpen] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [form] = Form.useForm();
  const [formdata, setFormdata] = useState(data)
  useEffect(() => {
    getIncomeTypeList({ id: 1 }).then((res) => {
      console.log(res);
      // {
      //   key: '1',
      //   name: 'John Brown',
      //   age: 32,
      //   address: 'New York No. 1 Lake Park',
      //   tags: ['nice', 'developer'],
      // },
      var tabelData = []
      res.data.forEach(element => {
        tabelData.push({
          key: element.id,
          incometypename: element.name,
          data: element.data
        })
      });
      setFormdata(tabelData)
    })
  }, [])

  const showModal = () => {
    setOpen(true)
  }
  const handleOk = () => {
    form.validateFields().then((res) => {
      setConfirmLoading(true)
      newIncometype(res.incomName).then((res) => {
        setConfirmLoading(false)
        setOpen(false)
        message.success(res.message)
      })
    }).catch((error) => {
      console.log(error);
    })
  }
  const editIncomeType = (rowdata) => {
    console.log(rowdata);
    setOpen(true)
    form.setFieldsValue({ incomName: rowdata.incometypename })
  }
  const deleteIncomeTypes = (rowdata) => {
    console.log(rowdata);
    deleteIncomeType(rowdata.key).then((res) => {
      message.success(res.message)
    })
  }

  return (
    <>
      <Row gutter={24} className='btn-form'>
        <Col span={3} lg={3} offset={21}>
          <Button type="primary" onClick={() => showModal()}>+ 新建</Button>
        </Col>
      </Row>
      <Table columns={columns} dataSource={formdata} />


      <Modal
        title="新建收入类型"
        className='lili'
        bodyStyle={{ display: 'block' }}
        open={open}
        onOk={handleOk}
        cancelText="取消"
        okText="确定"
        confirmLoading={confirmLoading}
        onCancel={() => setOpen(false)}
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
            label="收入类型名称"
            name="incomName"
            validateTrigger={['onBlur', 'onSubmit']}
            rules={[
              {
                required: true,
                message: '请输入收入类型名称',
              },
            ]
            }
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default IncometypeManagement