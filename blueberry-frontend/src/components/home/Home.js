import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./Home.css"

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
          <h2>Individual</h2>
        </div>
        <div className="menu-item">
          <h2>Organization</h2>
        </div>
        <div className="menu-item">Image</div>
      </div>

    </div>
  )
}

export default Home