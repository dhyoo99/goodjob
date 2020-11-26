import React from 'react';
import { Divider, Input, Typography, Dropdown, Button, Menu } from 'antd';
import { UserOutlined, MenuOutlined } from '@ant-design/icons';

import './HeaderCom.scss';
import Logo from '../Logo/Logo';
import MenuBar from './MenuBar/MenuBar';

const { Link } = Typography;
const { Search } = Input;

const langMenu = (
  <Menu>
    <Menu.Item>English</Menu.Item>
    <Menu.Item>Korean</Menu.Item>
  </Menu>
);

const Header = () => {
  // Layout
  // Logo
  // InputBar
  // Links
  // langButton
  // Category

  return (
    <div className="header">
      <div className="header__top">
        <div className="header__top__left">
          <Logo />
        </div>
        <div className="header__top__right">
          <div className="header__links">
            <Link href="/login">로그인</Link>
            <Divider type="vertical" />
            <Link href="/signup">회원가입</Link>
            <Divider type="vertical" />
            <Link href="https://github.com/dhyoo99/goodjob/">마이페이지</Link>
            <Dropdown placement="bottomCenter" arrow overlay={langMenu}>
              <Button>나중에</Button>
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

export default Header;
