import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';

import './SignUp.css';

export const SignUpButton = styled.button`
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

const SignUp = () => {
  return (
    <div className="sign-up">
      <Row>
        <Col span={12} className="business-sign-up">
          <h1 id="business-signup-title">기업 회원가입</h1>
          <SignUpButton>회원가입</SignUpButton>
        </Col>
        <Col span={12} className="person-sign-up">
          <h1 id="person-signup-title">개인 회원가입</h1>
          <SignUpButton>회원가입</SignUpButton>
        </Col>
      </Row>
    </div>
  );
};

export default SignUp;
