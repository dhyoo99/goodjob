import React from 'react';
import { Menu, Typography } from 'antd';

import './CategoryBar.scss';

const CategoryBar = () => {
  const handleMenuClicked = () => {};

  return (
    <div className="categoryBar">
      <Typography.Title level={4} style={{ textAlign: 'center' }}>
        Category
      </Typography.Title>
      <Menu
        onClick={handleMenuClicked}
        // style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <Menu.Item key="white-color">사무직 (0)</Menu.Item>
        <Menu.Item key="serving/kitchen">서빙/주방 (0)</Menu.Item>
        <Menu.Item key="edu">교육 (0)</Menu.Item>
        <Menu.Item key="it">IT (0)</Menu.Item>
        <Menu.Item key="design">디자인 (0)</Menu.Item>
        <Menu.Item key="health">헬스 (0)</Menu.Item>
      </Menu>
    </div>
  );
};

export default CategoryBar;
