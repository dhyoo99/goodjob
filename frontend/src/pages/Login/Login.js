import React, { useState } from 'react';
import styled from 'styled-components';
// import LoginSelectTypeModal from '../../components/LoginSelectTypeModal';
import SignUpSelectTypeModal from '../../components/SignUpSelectTypeModal/SignupSelectTypeModal';

import './Login.css';

const LoginWrapper = styled.div`
  width: 500px;
  margin: 0 auto;
  margin-top: 130px;
  margin-bottom: 130px;

  @media (max-width: 650px) {
    width: 90%;
  }
`;

export const LoginButton = styled.button`
  padding: 12px 11px;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  background-color: ${(props) => (props.color ? props.color : '#AAAAAA')};
  width: ${(props) => (props.width ? props.width : '100%')};
  margin-top: 50px;
  opacity: 0.8;
  :hover {
    opacity: ${(props) => !props.disabled && 1};
  }
`;

export const LoginInput = styled.input`
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 10px;
  width: ${(props) => (props.width ? props.width : '100%')};
  margin-top: 20px;
`;

const Login = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <LoginWrapper>
      <h1 id="login-title">로그인</h1>
      <LoginInput id="id-input" name="id" placeholder="username" />
      <LoginInput id="pw-input" name="password" placeholder="password" />
      <LoginButton onClick={handleModalOpen}>로그인</LoginButton>
      {isModalOpen && (
        <SignUpSelectTypeModal
          open={isModalOpen}
          handleClose={handleModalClose}
        />
      )}
    </LoginWrapper>
  );
};

export default Login;
