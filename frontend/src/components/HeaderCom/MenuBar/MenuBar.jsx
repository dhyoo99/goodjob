import React from 'react';
import { Space, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';

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
        <a href="https://github.com/dhyoo99/goodjob">공지사항</a>
      </Menu.Item>
      <Menu.Item>
        <a href="https://github.com/dhyoo99/goodjob">공지사항</a>
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
