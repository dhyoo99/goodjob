import React, { useState } from 'react';
import {
  Divider,
  Input,
  Typography,
  Dropdown,
  Button,
  Menu,
  Modal,
  Card
} from 'antd';
import { UserOutlined, MenuOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';

import './HeaderCom.scss';
import Logo from '../Logo/Logo';
import MenuBar from './MenuBar/MenuBar';
import { logout } from '../../store/actions/auth';
import { useHistory } from 'react-router-dom';

const { Title, Link } = Typography;
const { Search } = Input;

const langMenu = (
  <Menu>
    <Menu.Item>English</Menu.Item>
    <Menu.Item>Korean</Menu.Item>
  </Menu>
);

const Header = ({ isAuthenticated, logout }) => {
  const [visible, setVisible] = useState(false);
  const history = useHistory();

  const handleShowModal = () => {
    setVisible(true);
  };
  const handleCancelModal = () => {
    setVisible(false);
  };
  const handlePersonClicked = () => {
    history.push('/register-i');
    handleCancelModal();
  };
  const handleCorporateClicked = () => {
    history.push('/register-c');
    handleCancelModal();
  };

  const authState = !isAuthenticated ? (
    <>
      <Link href="/login">로그인</Link>
      <Divider type="vertical" />
      <Button type="link" onClick={handleShowModal}>
        회원가입
      </Button>
      <Modal
        visible={visible}
        title="유형을 골라주세요(개인/기업)"
        onCancel={handleCancelModal}
        footer={[
          <Button key="back" danger type="primary" onClick={handleCancelModal}>
            Return
          </Button>
        ]}
      >
        <div className="cardContainer">
          <Card>
            <Title style={{ textAlign: 'center' }}>개인</Title>
            <Button type="link" onClick={handlePersonClicked}>
              개인유형으로!
            </Button>
          </Card>
          <Card>
            <Title style={{ textAlign: 'center' }}>기업</Title>
            <Button type="link" onClick={handleCorporateClicked}>
              기업유형으로!
            </Button>
          </Card>
        </div>
      </Modal>
    </>
  ) : (
    <>
      <Button type="link" onClick={() => logout()}>
        로그아웃
      </Button>
    </>
  );

  return (
    <div className="header">
      <div className="header__top">
        <div className="header__top__left">
          <Logo />
        </div>
        <div className="header__top__right">
          <div className="header__links">
            {authState}
            <Divider type="vertical" />
            <Link href="/user-detail">마이페이지</Link>
            <Dropdown placement="bottomCenter" arrow overlay={langMenu}>
              <Button>Language</Button>
            </Dropdown>
          </div>
          <div className="header__btnContainer">
            <Button className="header__menu">
              <MenuOutlined />
            </Button>
            <Logo />
            <Button className="header__userInfo">
              <UserOutlined />
            </Button>
          </div>
          <Search
            className="header__inputBar"
            placeholder="input search text"
            enterButton
          />
        </div>
      </div>
      <Divider />
      <div className="header__bottom">
        <MenuBar />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Header);
