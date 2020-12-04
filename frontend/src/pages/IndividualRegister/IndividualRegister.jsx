import React, { useState } from 'react';
import {
  Form,
  Input,
  Tooltip,
  Radio,
  Button,
  DatePicker,
  Checkbox
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import moment from 'moment';

import { individualRegister } from '../../store/actions/auth';

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

const IndividualRegister = ({ isAuthenticated, individualRegister }) => {
  const history = useHistory();
  const [gender, setGender] = useState('male');
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  const [form] = Form.useForm();
  const handleOnFinish = (values) => {
    values = {
      ...values,
      birth_date: moment(values.birth_date._d).format('YYYY-MM-DD')
    };
    individualRegister(values);
    history.push('/');
  };
  const handleGenderChanged = (e) => {
    setGender(e.target.value);
  };

  return (
    <div className="individualRegister">
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
          label={
            <span>
              Email&nbsp;
              <Tooltip title="This is ID for authentication!">
                <QuestionCircleOutlined />
              </Tooltip>
            </span>
          }
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
              message: 'Please input your username!',
              whitespace: true
            }
          ]}
        >
          <Input />
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
          name="birth_date"
          label="Birth Date"
          rules={[
            {
              required: true,
              message: 'Please select your birth date!'
            }
          ]}
        >
          <DatePicker format="YYYY-MM-DD" />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
              message: 'Please select your gender!'
            }
          ]}
        >
          <Radio.Group onChange={handleGenderChanged} value={gender}>
            <Radio value="male">male</Radio>
            <Radio value="female">female</Radio>
          </Radio.Group>
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

export default connect(mapStateToProps, { individualRegister })(
  IndividualRegister
);
