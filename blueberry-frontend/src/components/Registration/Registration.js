import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import DefaultButton from '../default/DefaultButton';
  import './Registration.css'

function Registration() {
  return (
    <div>
        <div className="header1">
            <div className="title">
            <h1>Company Registration</h1>
        
        </div>
      </div>
      <div className="logo1">
        
      </div>
      <div className="companyInformationInput">
          <div className="inputField">
            <label for="cname">Company name:</label><br></br>
            <input type="text" id="cname" name="cname"></input><br></br>
          </div>
          <div className="inputField">
            <label for="address">Address:</label><br></br>
            <input type="text" id="caddress" name="cadress"></input><br></br>
          </div>
          <div className="inputField">
            <label for="cperson">Contact person:</label><br></br>
            <input type="text" id="cperson" name="cperson" ></input><br></br>
          </div>
          <div className="inputField">
            <label for="cdescription">Company description:</label><br></br>
            <textarea type="textarea" id="cdescription" name="cdescription" rows="4" cols="50"></textarea><br></br>
          </div>
          <div className="inputField">
            <label for="openinghours">Opening hours:</label><br></br>
            <input type="text" id="openinghours" name="openinghours"></input><br></br>
          </div>
      </div>
      <div className="registerButton">
        <DefaultButton link="/individual" title="Register"/>
      </div>
        
        <Link to="/">Home</Link>
    </div>
  )
}

export default Registration