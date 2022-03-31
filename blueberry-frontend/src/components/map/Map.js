import React from 'react'
import GoogleMapReact from 'google-map-react'
import './map.css'



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

        </GoogleMapReact>
      </div>
    </div>
  )

  
  
  export default Map