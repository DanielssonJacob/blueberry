import React from 'react'
import GoogleMapReact from 'google-map-react'
import './map.css'
import {RiMapPin2Fill} from "react-icons/ri"



const location = {
    address: 'Röda korset',
    lat: 59.32429193804371,
    lng: 18.06285500502244,
  }

  const Map = ({ location, zoomLevel }) => (
    <div className="map">
      <h2 className="map-h2"></h2>
  
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_MY_MAPS_API_KEY }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  )
  const LocationPin = ({ text }) => (
    <div className="pin">
      <RiMapPin2Fill className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  )
  
  
  export default Map