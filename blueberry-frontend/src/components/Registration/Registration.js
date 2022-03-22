import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Registration() {
  return (
    <div>
        <div className="header">
            <div className="logo">
            <h2>Company Registration</h2>
        
        </div>
      </div>
      <div className="Company information input">
          <label for="cname">Company name:</label><br></br>
          <input type="text" id="cname" name="cname"></input><br></br>
          <label for="address">Address:</label><br></br>
          <input type="text" id="caddress" name="cadress"></input><br></br>
          <label for="cperson">Contact person:</label><br></br>
          <input type="text" id="cperson" name="cperson" ></input><br></br>
          <label for="cdescription">Company description:</label><br></br>
          <input type="text" id="cdescription" name="cdescription"></input><br></br>
          <label for="cdescription">Opening hours:</label><br></br>
          <input type="text" id="openinghours" name="openinghours"></input><br></br>
      </div>
        
        <Link to="/">Home</Link>
    </div>
  )
}

export default Registration