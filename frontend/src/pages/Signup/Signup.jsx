import React from 'react';
import { Form, Input, Tooltip, Checkbox, Button } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './Signup.scss';

const formItemLayout = {
  labelCol: {
    sm: {
      span: 24
    },
    md: {
      span: 6
    }
  },
  wrapperCol: {
    sm: {
      span: 24
    },
    md: {
      span: 16
    }
  }
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
};

const Signup = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  const [form] = Form.useForm();
  const handleOnFinish = () => {};
  return (
    <div className="signup">
      <Form
        {...formItemLayout}
        form={form}
        name="signup"
        onFinish={handleOnFinish}
        initialValues={{
          prefix: '86'
        }}
        scrollToFirstError
      >
        <Form.Item
          name="firstname"
          label="First Name"
          rules={[
            {
              required: true,
              message: 'Please input your firstname!',
              whitespace: true
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="lastname"
          label="Last Name"
          rules={[
            {
              required: true,
              message: 'Please input your lastname!',
              whitespace: true
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!'
            },
            {
              required: true,
              message: 'Please input your E-mail!'
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="username"
          label={
            <span>
              Username&nbsp;
              <Tooltip title="What do you want others to call you?">
                <QuestionCircleOutlined />
              </Tooltip>
            </span>
          }
          rules={[
            {
              required: true,
              message: 'Please input your nickname!',
              whitespace: true
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!'
            }
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!'
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new TypeError(
                    'The two passwords that you entered do not match!'
                  )
                );
              }
            })
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            {
              required: true,
              message: 'Please input your phone number!'
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new TypeError('Should accept agreement'))
            }
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            I have read the{' '}
            <a href="https://github.com/dhyoo99/goodjob">agreement</a>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Sign up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Signup);
