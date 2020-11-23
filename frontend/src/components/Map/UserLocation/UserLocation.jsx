import React from 'react';
import { Button } from 'antd';
import { CompassOutlined } from '@ant-design/icons';

import './UserLocation.scss';

const UserLocation = ({ panTo }) => (
  <Button
    className="userLocation"
    onClick={() => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          panTo({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        () => null
      );
    }}
  >
    <CompassOutlined style={{ fontSize: '30px', cursor: 'pointer' }} />
  </Button>
);

export default UserLocation;
