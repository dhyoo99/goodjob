import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';

import './CorporateRegister.scss';
import { corporateRegister } from '../../store/actions/auth';

const formItemLayout = {
  labelCol: {
    sm: {
      span: 24
    },
    md: {
      span: 8
    },
    lg: {
      span: 7
    },
    xl: {
      span: 6
    }
  },
  wrapperCol: {
    sm: {
      span: 20
    },
    md: {
      span: 13
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

const CorporateRegister = ({ isAuthenticated, corporateRegister }) => {
  const history = useHistory();

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  const [form] = Form.useForm();
  const handleOnFinish = (values) => {
    // console.log(values);
    corporateRegister(values);
    history.push('/');
  };

  return (
    <div className="register">
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={handleOnFinish}
        initialValues={{
          prefix: '86'
        }}
        scrollToFirstError
      >
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
          name="first_name"
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
          name="last_name"
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
          name="company_name"
          label="Company Name"
          rules={[
            {
              required: true,
              message: 'Please input your company name!',
              whitespace: true
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="company_registration_number"
          label="Company Registration Number"
          rules={[
            {
              required: true,
              message: 'Please input your company registration number!',
              whitespace: false
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

export default connect(mapStateToProps, { corporateRegister })(
  CorporateRegister
);
