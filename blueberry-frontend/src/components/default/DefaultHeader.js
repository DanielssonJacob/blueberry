import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./DefaultHeader.css"
import SignInField from './SignInField';
import Logo from '../default/Logo';

function DefaultHeader() {
  return (

    <div>
    <Route render={({ history}) => (
      <div className="defaultheader">
        <Logo onClick={() => { history.push(`/home`) }}></Logo>
        <SignInField link="/"></SignInField>
      </div>)}/>
      </div>
  )
}

export default DefaultHeader


 
     