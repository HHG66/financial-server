/*
 * @Author: HHG
 * @Date: 2022-09-01 17:01:12
 * @LastEditTime: 2022-10-20 16:29:20
 * @LastEditors: 韩宏广
 * @FilePath: \my-financial\web\src\pages\ConsumpAssociated\index.js
 * @文件说明: 
 */
import { Space, Table, Row, Col, Button, Form, Input, Modal, Select, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { getConsumptionTypeList, newAssociatedBillName, getassociatedbill,editAssociatedBill } from '@/api/consumptiontype'

const ConsumpAssociated = () => {
  const [showModal, setshowModal] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [consumptionTypeList, setConsumptionTypeList] = useState([])
  const [title, setTitle] = useState({})
  const [data, setData] = useState([])
  const [editAssociatedBillId, seteditAssociatedBillId] = useState("")
  //true 为编辑模态框 false是新增模态框,模态框使用的一个，所以需要来区分。
  const [modelState, setmodelState] = useState(false)
  const [form] = Form.useForm();
  // const { Option } = Select;

  useEffect(() => {
    getConsumptionTypeList({}).then((res) => {
      var reqConsumptionTypeList = []
      res.data.forEach(element => {
        reqConsumptionTypeList.push({ "label": element.name, "value": element.age ,key:element.name})
      });
      setConsumptionTypeList(reqConsumptionTypeList)
    })
    getassociatedbill({}).then(res => {
      setData(res.data)
    })
  }, [])

  function showAssociatedBillnameModel() {
    setshowModal(true)
    form.setFieldsValue({ consumptionName: '', consumptiontype: '' })
    setTitle('新建关联消费账单')
    setmodelState(false)
  }
  function handleCancel() {
    setshowModal(false)
    setConfirmLoading(false)
  }
  function handleOk() {
    setConfirmLoading(true)
    form.validateFields().then(values => {
      if (modelState === false) {
        newAssociatedBillName(values).then(res => {
          message.success(res.message)
          setConfirmLoading(false)
          setshowModal(false)
        })
      } else if (modelState === true) {
        setConfirmLoading(false)
        console.log("bianji");
        editAssociatedBill({editAssociatedBillId,values}).then(res=>{
          console.log(res);
        })
      }
    }).catch(error => {
      setConfirmLoading(false)
      console.log(error);
    })
  }
  function editAssociatedBillModel(rowData) {
    // console.log(rowData);
    setshowModal(true)
    setTitle('编辑关联消费账单')
    form.setFieldsValue({ consumptionName: rowData.consumptionname, consumptiontype: rowData.consumptiontype })
    setmodelState(true)
    seteditAssociatedBillId(rowData.key)
  }
  const columns = [
    {
      title: '账单消费名称',
      dataIndex: 'consumptionname',
      key: '',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '关联消费类型',
      dataIndex: 'consumptiontype',
      key: 'age',
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
    //           color = 'black';
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
      render: (_, record,index) => (
        <Space size="middle">
          <a onClick={() => { editAssociatedBillModel(record) }}>编辑</a>
          <a >删除</a>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Row gutter={24} className='btn-form'>
        <Col span={6} lg={5} offset={19}>
          <Space>
            <Button type="primary" onClick={() => showAssociatedBillnameModel()}>+ 新建</Button>
            <Button>设置</Button>
          </Space>
        </Col>
      </Row>
      <Table columns={columns} dataSource={data} />
      <Modal
        title={title}
        bodyStyle={{ display: 'block' }}
        open={showModal}
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
            span: 24,
          }}
          initialValues={{
            consumptiontype: ''
          }}
          autoComplete="off"
        >
          <Form.Item
            label="账单消费名称"
            name="consumptionName"
            validateTrigger={['onBlur', 'onSubmit']}
            rules={[
              {
                required: true,
                message: '请输入账单消费名称',
              },
            ]
            }
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="关联消费类型"
            name="consumptiontype"
            validateTrigger={['onBlur', 'onSubmit']}
            rules={[
              {
                required: true,
                message: '请选择需要关联的消费类型',
              },
            ]}
          >
            <Select
              options={consumptionTypeList}
            >
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default ConsumpAssociated