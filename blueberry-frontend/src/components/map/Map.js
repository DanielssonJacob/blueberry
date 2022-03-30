import React from 'react'
import GoogleMapReact from 'google-map-react'
import './map.css'
//import { Icon } from '@iconify/react'
//import BsFillCaretDownFill from "react-icons/bs"



const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  }

  const Map = ({ location, zoomLevel }) => (
    <div className="map">
      <h2 className="map-h2">Come Visit Us At Our Campus</h2>
  
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_MY_MAPS_API_KEY}}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          
        </GoogleMapReact>
      </div>
    </div>
  )

  /*const LocationPin = ({ text }) => (
    <div className="pin">
      <Icon icon={BsFillCaretDownFill} className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  )*/
  
  export default Map