import React from 'react';
import { Layout } from 'antd';

import './PageLayout.css';

const { Header, Footer, Content } = Layout;

const PageLayout = (props) => {
  return (
    <Layout className="pageLayout">
      <Header>Header</Header>
      <Content>{props.children}</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default PageLayout;
