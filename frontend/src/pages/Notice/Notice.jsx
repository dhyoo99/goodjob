import React from 'react';
import { Affix, Row, Col } from 'antd';

import './Notice.scss';

const Notice = () => {
  return (
    <div className="notice">
      <Row>
        <Col xs={24} lg={18}>
          <section className="notice__advertisement">광고 자리</section>
          <main className="notice__content">공고</main>
          <div className="notice__qna">FAQ and Q&A</div>
          <div className="notice__support">Support</div>
        </Col>
        <Col lg={6}>
          <Affix offsetTop={120}>
            <section className="notice__legalContent">
              <h1>법률 컨텐츠</h1>
            </section>
          </Affix>
        </Col>
      </Row>
    </div>
  );
};

export default Notice;
