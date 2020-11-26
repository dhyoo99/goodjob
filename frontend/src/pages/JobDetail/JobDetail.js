// 스크랩기능 구현 필요

import React from 'react';
import 'antd/dist/antd.css';
import './JobDetail.css';
import { Descriptions } from 'antd';
import Map from '../../components/Map/Map';

const JobDetail = () => {
  return (
    <div>
      <br />
      <Descriptions
        title="기업명&공고안내문구(ex. 세븐일레븐 관악점 아르바이트 구합니다)"
        bordered
        layout="vertical"
        column={{ xxl: 5, xl: 5, lg: 3, md: 3, sm: 2, xs: 1 }}
      >
        <Descriptions.Item label="시급">8600원</Descriptions.Item>
        <Descriptions.Item label="근무기간">6개월~1년</Descriptions.Item>
        <Descriptions.Item label="근무요일">월~토</Descriptions.Item>
        <Descriptions.Item label="근무시간">10:00~19:00</Descriptions.Item>
        <Descriptions.Item label="모집기간">상시모집</Descriptions.Item>
      </Descriptions>

      <br />

      <Descriptions
        bordered
        layout="vertical"
        column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 1, xs: 1 }}
      >
        <Descriptions.Item label="상세모집조건">
          <ul>
            <li>마감일: 상시모집</li>
            <li>인원: 1명</li>
            <li>성별: 무관</li>
            <li>연령: 23세(1998년생)~53세(1968년생)</li>
            <li>비자: D5</li>
            <li>한국어 능숙도: 중 / 하</li>
          </ul>
        </Descriptions.Item>

        <Descriptions.Item label="상세근무조건">
          <ul>
            <li>급여: 시급 8600원</li>
            <li>근무기간: 6개월~1년</li>
            <li>근무요일: 주2일(월, 수)</li>
            <li>근무시간: 시간협의</li>
            <li>업직종: 편의점, 세븐일레븐</li>
            <li>고용형태: 알바</li>
          </ul>
        </Descriptions.Item>
      </Descriptions>

      <br />

      <Descriptions title="채용담당자 정보" column={1}>
        <Descriptions.Item label="담당자">홍길동</Descriptions.Item>
        <Descriptions.Item label="연락처">010-0000-0000</Descriptions.Item>
        <Descriptions.Item label="주소">서울특별시 xx</Descriptions.Item>
      </Descriptions>

      <Map />
    </div>
  );
};

export default JobDetail;
