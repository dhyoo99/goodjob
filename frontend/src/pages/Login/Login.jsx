import React from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { login } from '../../store/actions/auth';

import './Login.scss';

const Login = ({ isAuthenticated, login }) => {
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  const handleOnFinish = (values) => {
    login(values);
  };

  return (
    <div className="login">
      <Form
        name="login-form"
        className="login-form"
        initialValues={{
          remember: true
        }}
        onFinish={handleOnFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your E-mail!'
            }
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="E-mail"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!'
            }
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="/login/forgot">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>{' '}
          Or <a href="/signup">Sign up now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};

const mapStateProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateProps, { login })(Login);
