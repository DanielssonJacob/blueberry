import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState } from "react";
import Alert from '@mui/material/Alert';
import DefaultHeader from '../default/DefaultHeader'
import './PostRegistration.js'

function PostRegistration() {

    return(
        <body className="body">
          <div className="header1">
            <DefaultHeader></DefaultHeader>
          </div>
          <div className="title1">
            <label for="mamasita">Mamasita.</label> 
          </div>
        </body>
    )
    
}

export default PostRegistration