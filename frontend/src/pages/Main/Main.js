import React from 'react';
import { Row, Col, Divider } from 'antd';

import CategoryBar from './CategoryBar/CategoryBar';
import Map from '../../components/Map/Map';
import LegalContent from '../../components/LegalContent/LegalContent';

const Main = () => {
  return (
    <div>
      <Row>
        <Col flex="200px">
          <CategoryBar />
        </Col>
        <Col flex="auto">
          <Map />
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col>
          <LegalContent />
        </Col>
      </Row>
    </div>
  );
};

export default Main;
