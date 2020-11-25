import React from 'react';
import { Layout } from 'antd';

import './PageLayout.scss';
import HeaderCom from '../../components/HeaderCom/HeaderCom';

const { Header, Footer, Content } = Layout;

const PageLayout = (props) => {
  return (
    <Layout className="pageLayout">
      <Header>
        <HeaderCom />
      </Header>
      <Content>{props.children}</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default PageLayout;
