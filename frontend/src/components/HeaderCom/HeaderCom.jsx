import React from 'react';
import { Divider, Input, Typography, Dropdown, Button, Menu } from 'antd';

import './HeaderCom.scss';
import Logo from '../Logo/Logo';

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
  // TODO: langButton
  // TODO: Category

  return (
    <div className="header">
      <div className="header__top">
        <div className="header__top__left">
          <Logo />
        </div>
        <div className="header__top__right">
          <div className="header__links">
            <Link href="https://github.com/dhyoo99/goodjob/">로그인</Link>
            <Divider type="vertical" />
            <Link href="https://github.com/dhyoo99/goodjob/">회원가입</Link>
            <Divider type="vertical" />
            <Link href="https://github.com/dhyoo99/goodjob/">FAQ</Link>
            <Divider type="vertical" />
            <Link href="https://github.com/dhyoo99/goodjob/">마이페이지</Link>
          </div>
          <div className="header__inputNbtn">
            <Search
              className="header__inputBar"
              placeholder="input search text"
              enterButton
            />
            <Dropdown placement="bottomCenter" arrow overlay={langMenu}>
              <Button>나중에</Button>
            </Dropdown>
          </div>
        </div>
      </div>
      <Divider />
      <div className="header__bottom">Category</div>
    </div>
  );
};

export default Header;
