import React from 'react';
import { Divider, Input, Typography } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import './HeaderCom.scss';
import Logo from '../Logo/Logo';

const { Link } = Typography;
// const { Search } = Input;

const Header = () => {
  //  Logo
  // TODO: InputBar
  // TODO: Links
  // TODO: langButton
  // TODO: Category

  return (
    <div className="header">
      <div className="header__top">
        <div className="header__top__left">
          <Logo />
        </div>
        <div className="header__top__right">
          <div className="links">
            <Link href="https://github.com/dhyoo99/goodjob/">로그인</Link>
            <Divider type="vertical" />
            <Link href="https://github.com/dhyoo99/goodjob/">회원가입</Link>
            <Divider type="vertical" />
            <Link href="https://github.com/dhyoo99/goodjob/">FAQ</Link>
            <Divider type="vertical" />
            <Link href="https://github.com/dhyoo99/goodjob/">마이페이지</Link>
          </div>
          <Input
            className="header__inputBar"
            placeholder="input search text"
            suffix={<SearchOutlined />}
          />
        </div>
      </div>
      <Divider />
      <div className="header__bottom">Category</div>
    </div>
  );
};

export default Header;
