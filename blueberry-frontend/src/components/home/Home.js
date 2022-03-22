import { Button } from '@mui/material';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./Home.css"
import HomePageButton from './HomePageButton';
import blueberry from './blueberry-img.png';
import ColorRow from './ColorRow';

function Home() {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <h2>blueberry</h2>
          <p>Help others</p>
        </div>
      </div>

      <div className="menu-choice">
      <div className="menu-item">
        <HomePageButton link="/individual" title="Individual"/>
      </div> 
    
      <div className="menu-item">
        <HomePageButton link="/organization" title="Organization"/>
      </div> 
        <div className="menu-item"><img src={blueberry} alt="" /></div>
      </div>
      <div className='divider'></div>
      <ColorRow color={"#E8340C"} height={"60px"}></ColorRow>
      <ColorRow color={"#F5FA70"} height={"60px"}></ColorRow>
      <ColorRow color={"#0271BB"} height={"60px"}></ColorRow>
    </div>
  )
}

export default Home