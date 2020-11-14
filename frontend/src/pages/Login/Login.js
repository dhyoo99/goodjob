import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';

import './Login.css';

export const LoginButton = styled.button`
  padding: 12px 11px;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  background-color: ${(props) => (props.color ? props.color : '#AAAAAA')};
  width: ${(props) => (props.width ? props.width : '100%')};
  margin: ${(props) => (props.margin ? props.margin : '4px 0')};
  opacity: 0.8;
  :hover {
    opacity: ${(props) => !props.disabled && 1};
  }
`;

export const LoginInput = styled.input`
  padding: 11px;
  border-radius: 4px;
  color: rgb(50, 50, 50);
  font-size: 16px;
  outline: none;
  width: ${(props) => (props.width ? props.width : '100%')};
  box-sizing: border-box;
  border: 1px solid #ddd;
  margin: 4px 0;
  border-color: ${(props) => props.invalid && '#ff395b'};
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #aaa;
  }
  :focus {
    border-color: #008489;
  }
`;

const Login = () => {
  return (
    <div className="login">
      <Row>
        <Col span={12} className="business-login">
          <h1 id="business-login-title">기업 로그인</h1>
          <LoginInput id="id-input" name="id" placeholder="아이디" />
          <LoginInput id="pw-input" name="password" placeholder="비밀번호" />
          <LoginButton>로그인</LoginButton>
        </Col>
        <Col span={12} className="person-login">
          <h1 id="person-login-title">개인 로그인</h1>
          <LoginInput id="id-input" name="id" placeholder="아이디" />
          <LoginInput id="pw-input" name="password" placeholder="비밀번호" />
          <LoginButton>로그인</LoginButton>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
