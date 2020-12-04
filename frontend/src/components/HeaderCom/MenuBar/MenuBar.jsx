import React from 'react';
import { Space, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import './MenuBar.scss';

const Category = () => {
  const infoMenu = (
    <Menu>
      <Menu.Item>
        <a href="https://github.com/dhyoo99/goodjob">공지사항</a>
      </Menu.Item>
      <Menu.Item>
        <a href="https://github.com/dhyoo99/goodjob">공지사항</a>
      </Menu.Item>
    </Menu>
  );
  const noticeMenu = (
    <Menu>
      <Menu.Item>
        <Link to="/notice">전체</Link>
      </Menu.Item>
      <Menu.Item>
        <a href="https://github.com/dhyoo99/goodjob">사무직</a>
      </Menu.Item>
      <Menu.Item>
        <a href="https://github.com/dhyoo99/goodjob">서빙/주방</a>
      </Menu.Item>
      <Menu.Item>
        <a href="https://github.com/dhyoo99/goodjob">교육</a>
      </Menu.Item>
      <Menu.Item>
        <a href="https://github.com/dhyoo99/goodjob">IT</a>
      </Menu.Item>
      <Menu.Item>
        <a href="https://github.com/dhyoo99/goodjob">디자인</a>
      </Menu.Item>
      <Menu.Item>
        <a href="https://github.com/dhyoo99/goodjob">헬스</a>
      </Menu.Item>
    </Menu>
  );
  const legalMenu = (
    <Menu>
      <Menu.Item>
        <a href="https://github.com/dhyoo99/goodjob">FAQ</a>
      </Menu.Item>
      <Menu.Item>
        <a href="https://github.com/dhyoo99/goodjob">공지사항</a>
      </Menu.Item>
    </Menu>
  );
  const communityMenu = (
    <Menu>
      <Menu.Item>
        <a href="https://github.com/dhyoo99/goodjob">공지사항</a>
      </Menu.Item>
      <Menu.Item>
        <a href="https://github.com/dhyoo99/goodjob">공지사항</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Space className="menuBar">
      <Dropdown overlay={infoMenu}>
        <div>
          Info <DownOutlined />
        </div>
      </Dropdown>
      <Dropdown overlay={noticeMenu}>
        <div>
          Notice <DownOutlined />
        </div>
      </Dropdown>
      <Dropdown overlay={legalMenu}>
        <div>
          Consultant <DownOutlined />
        </div>
      </Dropdown>
      <Dropdown overlay={communityMenu}>
        <div>
          Community <DownOutlined />
        </div>
      </Dropdown>
    </Space>
  );
};

export default Category;
