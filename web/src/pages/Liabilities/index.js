/*
 * @Author: HHG
 * @Date: 2022-12-18 20:36:35
 * @LastEditTime: 2023-01-09 17:17:45
 * @LastEditors: 韩宏广
 * @FilePath: \financial\web\src\pages\Liabilities\index.js
 * @文件说明: 
 */
import React, { useState, useEffect } from 'react'
import { Descriptions, Statistic, Tag, Space, Table, Modal, Draggable, Button, Row, Col, Progress, Form, Typography, Popconfirm, InputNumber, Input } from 'antd'
import { getLoanListApi, getLoanInfoListApi } from '@/api/liabilities'
import './index.less'

const Liabilities = () => {
  const [modelData, setModelData] = useState({
    open: false
  })
  const [liabilitieInfo, setLiabilitieInfo] = useState({
    loanname: "花呗",   //贷款名称
    annualinterestrate: "20%", //年利率
    totalinterest: 300, //总利息
    loanlife: '1', //贷款年限
    totalnumberperiods: 24, //总期数
    thenumberrepaymentsperyear: 12, //每年还款次数
    loanstarttime: '2021-12-01', //贷款开始时间
    moderepayment: "最低还款", //还款方式
    currentnumberissues: 10, //当前期数
    amount: 15000,//总金额
    residualamount: 9000,//剩余金额
  })

  const [label, setlabel] = useState(
    [{
      labele:'贷款名称'
      loanname: "花呗",   //贷款名称
      
    }]
    {
  
    annualinterestrate: "20%", //年利率
    totalinterest: 300, //总利息
    loanlife: '1', //贷款年限
    totalnumberperiods: 24, //总期数
    thenumberrepaymentsperyear: 12, //每年还款次数
    loanstarttime: '2021-12-01', //贷款开始时间
    moderepayment: "最低还款", //还款方式
    currentnumberissues: 10, //当前期数
    amount: 15000,//总金额
    residualamount: 9000,//剩余金额
  })

  const [loanList, setLoanList] = useState([])
  const [loanInfoList, setLoanInfoList] = useState([])
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState('');
  const [loanInfoState, setloanInfoState] = useState(false);
  const isEditing = (record) => record.key === editingKey;

  useEffect(() => {
    getLoanList({})
  }, [])


  const getLoanList = (params) => {
    getLoanListApi(params).then(res => {
      // let list=[]
      res.data.forEach(element => {
        element.key = element.id
      });
      setLoanList(res.data)
    })
  }

  const edit = (record) => {
    form.setFieldsValue({
      ...record,
    });
    // console.log(record.key);
    setEditingKey(record.key);
  };
  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...loanInfoList];
      // console.log(key);
      const index = newData.findIndex((item) => {
        return key === item.key
      });
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        // setLoanInfoList(newData)
        setEditingKey('');
      } else {
        newData.push(row);
        // setLoanInfoList(newData)

        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: '贷款单名称',
      dataIndex: 'loanname',
      key: 'loanname',
      // render: (text) => <a>{text}</a>,
    },
    {
      title: '金额',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: '还款方式',
      dataIndex: 'moderepayment',
      key: 'moderepayment',
    },
    {
      title: '总利息',
      dataIndex: 'totalinterest',
      key: 'totalinterest',
    },
    {
      title: '剩余金额',
      dataIndex: 'residualamount',
      key: 'residualamount',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => { seeLansInfo() }}>查看贷款单</a>
          <a>删除</a>
        </Space>
      ),
    },
  ];

  const seeLansInfo = () => {
    setModelData({
      ...modelData,
      open: true
    })
    getLoanInfoListApi({}).then(res => {
      res.data.forEach(element => {
        element.key = element.id
      })
      setLoanInfoList(res.data)
    })
  }
  const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
  }) => {
    if (editing) {
      console.log(inputType);
      // console.log(record);
      // console.log(title);
    }
    const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item
            name={dataIndex}
            style={{
              margin: 0,
            }}
            rules={[
              {
                required: true,
                message: `Please Input ${title}!`,
              },
            ]}
          >
            {inputNode}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };
  const modalColumns = [
    {
      title: '期数',
      dataIndex: 'numberperiods',
      key: 'numberperiods',
      render: (text) => <a>{text}</a>,
      editable: true,
    },
    {
      title: '还款日期',
      dataIndex: 'repaymentdate',
      key: 'repaymentdate',
      render: (text) => <a>{text}</a>,
      editable: true,

    },
    {
      title: '期初余额',
      dataIndex: 'openingbalance',
      key: 'openingbalance',
      width: 100,
      editable: true,

    },
    {
      title: '计划还款',
      dataIndex: 'plannedrepayment',
      key: 'plannedrepayment',
      editable: true,

    },
    {
      title: '额外还款',
      dataIndex: 'additionalrepayment',
      key: 'additionalrepayment',
      editable: true,

    },
    {
      title: '累计利息',
      dataIndex: 'accumulatedinterest',
      key: 'accumulatedinterest',
      editable: true,

    },
    {
      title: '本金',
      dataIndex: 'principal',
      key: 'principal',
      editable: true,
    },
    {
      title: '期终余额',
      dataIndex: 'closingbalance',
      key: 'closingbalance',
      editable: true,
    },
    {
      title: '操作',
      key: 'action',
      width: 150,
      // render: (_, record) => (
      //   <Space size="middle">
      //     <a>编辑</a>
      //     <a>删除</a>
      //   </Space>
      // ),
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
            Edit
          </Typography.Link>
        );
      },
    },
  ];

  const mergedColumns = modalColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'sss' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  const handleOk = (e) => {
    console.log(e);
    setModelData({
      ...modelData,
      open: false
    });
  };
  const handleCancel = (e) => {
    setModelData({
      ...modelData,
      open: false
    });
  };

  const editLoanInfo=()=>{
    
  }
  return (
    <>
      {/* <div>负债贷款偿还11</div> */}
      <Descriptions title="总贷款信息">

        <Descriptions.Item label="总贷款金额（元）">
          <Statistic value={50000} />

        </Descriptions.Item>
        <Descriptions.Item label="剩余还款">
          <Statistic value={38000} />
        </Descriptions.Item>
      </Descriptions>
      <Table columns={columns} dataSource={loanList} />

      <Modal
        title='贷款单详细'
        width={1200}
        open={modelData.open}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Descriptions
          bordered
          title=""
          size='small'
          column={2}
          extra={<Button type="primary" onClick={editLoanInfo}>编辑</Button>}
        >
          {


          }

          <Descriptions.Item label="贷款名称">
            <Input value={liabilitieInfo.loanname} disabled></Input>
          </Descriptions.Item>
          <Descriptions.Item label="年利率">{liabilitieInfo.annualinterestrate}</Descriptions.Item>
          <Descriptions.Item label="总利息">{liabilitieInfo.totalinterest}</Descriptions.Item>
          <Descriptions.Item label="贷款年限">{liabilitieInfo.loanlife}</Descriptions.Item>
          <Descriptions.Item label="总期数">{liabilitieInfo.totalnumberperiods}</Descriptions.Item>
          <Descriptions.Item label="每年还款次数">{liabilitieInfo.thenumberrepaymentsperyear}</Descriptions.Item>
          <Descriptions.Item label="贷款开始时间">{liabilitieInfo.loanstarttime}</Descriptions.Item>
          <Descriptions.Item label="还款方式">{liabilitieInfo.moderepayment}</Descriptions.Item>
          <Descriptions.Item label="当前期数">{liabilitieInfo.currentnumberissues}</Descriptions.Item>
        </Descriptions>
        <Space direction="vertical" size='large' style={{ width: "100%" }}>
          <Progress percent={33} status="active" />
          <Form form={form} component={false}>
            <Table components={{
              body: {
                cell: EditableCell,
              },
            }}
              bordered
              // dataSource={data}
              dataSource={loanInfoList}
              columns={mergedColumns}

              rowClassName="editable-row"
              pagination={{
                onChange: cancel,
              }} />
          </Form>
        </Space>

      </Modal>
    </>
  )
}

export default Liabilities