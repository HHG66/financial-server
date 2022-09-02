
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {reqLogin}from '@/api/login'
import './index.less'
const Login = () => {

 const onSubmit =   values => {
    // 请求登录
    const { username, password } = values
    reqLogin(username,password).then((res)=>{
      console.log(res);
    })

  }
  // 自定义验证密码
  const validatorPwd = async (_, value) => {
    if(!value) {
      return Promise.reject(new Error('密码必须输入'))
    } else if(value.length < 4) {
      return Promise.reject(new Error('密码长度不能小于4位!'))
    } else if(value.length > 16) {
      return Promise.reject(new Error('密码长度不能大于16位!'))
    } else if(!/^[a-zA-Z0-9_]+$/.test(value)) {
      return Promise.reject(new Error('密码必须是英文、数字、下划线组成!'))
    } else {
      return Promise.resolve() 
    }
  }
  return (
    <>
      <div className="login">
        <header className="login_header">
          <h1>React项目：后台管理系统</h1>
        </header>
        <section className="login_content">
          <h2>用户登录</h2>
          <Form
            name="normal_login"
            className="login-form"
            onFinish={onSubmit}
          >
            <Form.Item
              name="username"
              validateTrigger="onChange"
              initialValue="admin"
              rules={[
                { required: true, message: '请输入用户名!' },
                { min: 4, message: '用户名最少4位!' },
                { max: 12, message: '用户名最多12位!' },
                { pattern: /^[0-9a-zA-Z_]{1,}$/, message: '用户名必须是英文、数字、下划线组成!' }
              ]}
            >
              <Input
                prefix={
                  <UserOutlined
                    className="site-form-item-icon"
                    style={{ color: 'rgba(0,0,0,0.25)' }}
                  />
                }
                placeholder="用户名"
              />
            </Form.Item>
            <Form.Item
              name="password"
              validateTrigger="onChange"
              rules={[
                {
                  validator:validatorPwd
                }
              ]}
            >
              <Input
                prefix={
                  <LockOutlined
                    className="site-form-item-icon"
                    style={{ color: 'rgba(0,0,0,0.25)' }}
                  />
                }
                type="password"
                placeholder="密码"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    </>
  )
}
export default Login