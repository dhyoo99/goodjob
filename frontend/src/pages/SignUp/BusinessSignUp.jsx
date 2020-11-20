import React, { useState } from 'react';
import styled from 'styled-components';

import './BusinessSignUp.css';

const SignUpWrapper = styled.div`
  width: 500px;
  margin: 0 auto;
  margin-top: 130px;
  margin-bottom: 130px;

  @media (max-width: 650px) {
    width: 90%;
  }
`;

export const SignUpButton = styled.button`
  padding: 12px 11px;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  background-color: ${(props) => (props.color ? props.color : '#AAAAAA')};
  width: ${(props) => (props.width ? props.width : '100%')};
  margin-top: 100px;
  opacity: 0.8;
  :hover {
    opacity: ${(props) => !props.disabled && 1};
  }
`;

const SignUpInput = styled.input`
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 10px;
  width: ${(props) => (props.width ? props.width : '100%')};
  margin-top: 20px;
`;

const BusinessSignUp = () => {
  const [userInfo, setUserInfo] = useState({ username: '', password: '' });
  const [confirmPW, setConfirmPW] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleConfirmPW = (e) => {
    setConfirmPW(e.target.value);
  };

  return (
    <SignUpWrapper>
      <h1 id="business-signup-title">기업 회원가입</h1>
      <SignUpInput
        name="username"
        placeholder="username"
        onChange={handleChange}
        autoComplete="false"
        value={userInfo?.username || ''}
      />
      <SignUpInput
        name="password"
        type="password"
        placeholder="password"
        onChange={handleChange}
        autoComplete="false"
        value={userInfo?.password || ''}
      />
      <SignUpInput
        name="confirm-password"
        type="password"
        placeholder="confirm password"
        onChange={handleConfirmPW}
        autoComplete="false"
        value={confirmPW || ''}
      />
      <SignUpButton>회원가입</SignUpButton>
    </SignUpWrapper>
  );
};

export default BusinessSignUp;
