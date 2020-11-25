import React from 'react';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng
} from 'use-places-autocomplete';
import { Select } from 'antd';
import PropTypes from 'prop-types';

import './MapSearch.scss';

const { Option } = Select;

const MapSearch = ({ panTo }) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue
    // clearSuggestions
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 37.566536, lng: () => 126.977966 },
      radius: 200 * 1000
    }
  });
  const options = data.map(({ place_id, description }) => (
    <Option key={place_id}>{description}</Option>
  ));
  return (
    <div className="mapSearch">
      <Select
        showSearch
        value={value || undefined}
        placeholder="위치를 입력하세요"
        style={{ width: '300px' }}
        size="large"
        defaultActiveFirstOption={true}
        showArrow={false}
        filterOption={false}
        onSearch={(address) => {
          setValue(address);
        }}
        onSelect={async (address) => {
          setValue(address, false);
          //   clearSuggestions();
          try {
            const results = await getGeocode({ address: value });
            const { lat, lng } = await getLatLng(results[0]);
            panTo({ lat, lng });
          } catch (err) {
            throw new Error(err);
          }
        }}
        disabled={!ready}
        notFoundContent={null}
      >
        {status === 'OK' && options}
      </Select>
    </div>
  );
};

export default MapSearch;

MapSearch.propTypes = {
  panTo: PropTypes.func.isRequired
};
