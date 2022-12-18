/*
 * @Author: HHG
 * @Date: 2022-09-01 17:01:04
 * @LastEditTime: 2022-12-15 00:53:06
 * @LastEditors: 韩宏广
 * @FilePath: /个人财务/web/src/pages/BalancepaymentsMgement/index.js
 * @文件说明: 
 */
import { Calendar, Col, Divider, Drawer, Row, Badge, Space } from 'antd'
import { useState } from 'react'
import "./index.less"

import { getBalancepayMentsApi } from '@/api/balancepayments'
// const DescriptionItem = ({ title, content }) => (
//   <div className="site-description-item-profile-wrapper">
//     <p className="site-description-item-profile-p-label">{title}:</p>
//     {content}
//   </div>
// );
const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);

const BalancepaymentsMgement = () => {
  const [drawers, setDrawers] = useState(false);
  // const showDrawer = () => {
  //   setDrawers(true);
  // };
  const [balancepayMents, setBalancepayMents] = useState({ income: [], spending: [] })
  const onClose = () => {
    setDrawers(false);
  };
  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };
  const onSelect = (moment) => {
    // console.log(window.moment(moment._d).format('YYYY-MM-DD'));
    setDrawers(true);
    getBalancepayMentsApi(window.moment(moment._d).format('YYYY-MM-DD')).then(res => {
      setBalancepayMents(res.data)
    })
  }

  return (
    <>
      {/* BalancepaymentsMgement */}
      <div className='calendar'>
        <Calendar onPanelChange={onPanelChange} fullscreen={true} onSelect={onSelect} />

        <Drawer width={640} placement="right" closable={false} onClose={onClose} open={drawers}>
          <p
            className="site-description-item-profile-p"
            style={{
              marginBottom: 24,
            }}
          >
            收支情况
          </p>
          <p className="site-description-item-profile-p">收入</p>

          <Row>
            {
              // console.log(balancepayMents.income)
              balancepayMents.income.map((value, index) => {
                console.log(value);
                return <Col span={12}>
                  <div className='line-box'>
                    <Space>
                      <Badge color="#f50" />
                      <DescriptionItem key={index} title={value.name} content={value.value} />
                    </Space>
                  </div>
                </Col>
              })
            }
          </Row>
          <Divider />
          <p className="site-description-item-profile-p">消费</p>
          <Row>
            {
              balancepayMents.spending.map((value, index) => {
                console.log(value);
                return <Col span={12}>
                  <div className='line-box'>
                    <Space>
                      <Badge color="blue" />
                      <DescriptionItem key={index} title={value.name} content={value.value} />
                    </Space>
                  </div>
                </Col>
              })
            }
          </Row>
        </Drawer>
      </div>
    </>
  )
}

export default BalancepaymentsMgement