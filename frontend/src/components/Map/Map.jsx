import React, { useState, useRef, useCallback } from 'react';
import {
  GoogleMap,
  Marker,
  useLoadScript,
  InfoWindow
} from '@react-google-maps/api';
import { formatRelative } from 'date-fns';

import './Map.scss';
import './MapSearch/MapSearch';
import MapSearch from './MapSearch/MapSearch';
import UserLocation from './UserLocation/UserLocation';

require('dotenv').config();

const libraries = ['places'];
const mapContainerStyle = {
  width: '100%',
  height: '100%',
  display: 'absolute',
  top: '0',
  left: '0'
};
const center = {
  lat: 37.566536,
  lng: 126.977966
};
const options = {
  disableDefaultUI: true,
  zoomControl: true
};

const Map = () => {
  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries
  });

  const mapRef = useRef();
  const handleMapLoaded = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(15);
  }, []);

  if (loadError) return 'Error  loading maps';
  if (!isLoaded) return 'Loading Maps';

  return (
    <div className="map">
      <MapSearch panTo={panTo} />
      <UserLocation panTo={panTo} />
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
        options={options}
        onLoad={handleMapLoaded}
        onClick={(event) => {
          setMarkers((current) => [
            ...current,
            {
              lat: event.latLng.lat(),
              lng: event.latLng.lng(),
              time: new Date()
            }
          ]);
        }}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.time.toISOString()}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={{
              url:
                'data:image/png;base64,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',
              scaledSize: new window.google.maps.Size(30, 30),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15)
            }}
            onClick={() => {
              setSelected(marker);
            }}
          />
        ))}
        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2>Part Time!</h2>
              <p>Announced {formatRelative(selected.time, new Date())}</p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
};

export default Map;
