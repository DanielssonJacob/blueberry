import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import './Organization.css'

function Organization() {
  return (
    <div className="org-menu">
        <div className="sign-in">
        <p>Sign in</p>
        </div>
        <div className="create-acc">
        <p>Create account</p>
        </div>
    </div>


    
  )
}

export default Organization