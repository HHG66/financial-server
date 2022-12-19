/*
 * @Author: HHG
 * @Date: 2022-10-03 23:59:38
 * @LastEditTime: 2022-12-19 17:31:04
 * @LastEditors: 韩宏广
 * @FilePath: \my-financial\web\src\pages\Funds\index.js
 * @文件说明: 
 */
import React, { Component, useEffect, useState } from 'react'
import { Button, Checkbox, Col, Form, Input, Row, Space, DatePicker, Table, Tag } from 'antd';
// import './index.less'
import { getPositionFundsListApi } from '@/api/funds'
import { getSineFundInfoApi } from '@/api/other';
import { formatSinaStock } from '@/utils/index';


export default () => {
  // Funds 组件
  const form = Form.useForm()
  const [data, setData] = useState([])
  const columns = [
    {
      title: '基金名称',
      dataIndex: 'fundname',
      key: 'fundname',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '基金代码',
      dataIndex: 'fundcode',
      key: 'fundcode',
    },
    {
      title: '板块',
      dataIndex: 'plate',
      key: 'plate',
    },
    {
      title: '买入时间',
      dataIndex: 'buydate',
      key: 'buydate',
    },
    {
      title: '卖出时间',
      dataIndex: 'saledate',
      key: 'saledate',
    },
    {
      title: '投入金额',
      dataIndex: 'amountinvested',
      key: 'amountinvested',
    },
    {
      title: '最近操作',
      dataIndex: 'fundstate',
      key: 'fundstate',
    },
    {
      title: '持仓占比(%)',
      dataIndex: 'proportionpositionsheld',
      key: 'proportionpositionsheld',
      render: (_, record) => (
        // console.log(record.proportionpositionsheld)
        <div>{record.proportionpositionsheld}</div>
      ),
    },
    {
      title: '成本',
      dataIndex: 'costprice',
      key: 'costprice',
    },
    {
      title: '当日价格（元）',
      dataIndex: 'currentprice',
      key: 'currentprice',
    },
    {
      title: '当日盈亏(%)',
      dataIndex: 'currentearnings',
      key: 'currentearnings',
    },
    {
      title: '盈亏(百分比）',
      dataIndex: 'earningspercentage',
      key: 'earningspercentage',
    },
    {
      title: '盈亏（元）',
      dataIndex: 'earnings',
      key: 'earnings',
    },
    {
      title: '编辑',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={()=>editState()}>编辑状态</a>
          <a onClick={()=>deletefunds()}>删除</a>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    let params = {}
    getPositionFundsListApi(params).then(res => {
      // console.log(res);
      // let ss=[]
      // res.data.forEach(element => {
      //   console.log(element);
      //   let i={}
      //   for (const key in element) {
      //     i[key]=element[key]
      //   }
      //   ss.push(i)
      // });
      // console.log(ss);
      setData(res.data)
    })
  }, [])

  const onFinish = (values) => {
    let startdate
    let enddate
    if (values.startdate) {
      startdate = window.moment(values.startdate._d).format('HHHH-YY-DD')
    }
    if (values.enddate) {
      enddate = window.moment(values.enddate._d).format('HHHH-YY-DD')
    }
    // console.log(enddate);
    console.log('Success:', values);

    getSineFundInfoApi({ fundname: "sz159605,s_sh600519" }).then(res => {
      // console.log(res.data);
      // let info = res.data.replace('"','').split(";")
      // debugger
      // let fundsInfo = formatSinaStock(info[1])
      // console.log(fundsInfo);
      let ttt = res.data.replace(/[\r\n]/g, "")
      let ddd = ttt.replace('"', '')
      let yyy = ddd.split(";")
      yyy.forEach(element => {
        let i = element.replaceAll('"', '')
        let t = i.split("=")
        // console.log(t[1]);
        if (t[1]) {
          let g = formatSinaStock(t[1])
          console.log(g);
        }
      });
      // console.log(yyy);  
    })



    // tencent.searchStocks(values.name).then(res=>{
    //   console.log(res);
    // })
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const editState = () => {
    console.log("editState");
  }
  const deletefunds=() => {
    console.log("deletefunds");
  }

  return (
    <>
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row>
          <Space>
            <Col>
              <Form.Item
                label="股票基金名称"
                name="name"
              >
                <Input />
              </Form.Item>
            </Col>
            <Col >
              <Form.Item
                label="起始时间"
                name="startdate"
              >
                <DatePicker />
              </Form.Item>
            </Col>
            <Col >
              <Form.Item
                label="终止时间"
                name="enddate"
              >
                {/* <Input /> */}
                <DatePicker />
              </Form.Item>
            </Col>
            <Col>
              <Button htmlType='submit' type='primary'>查询</Button>
            </Col>
          </Space>

        </Row>
      </Form>


      <Table columns={columns} dataSource={data} />;
    </>
  )
}








