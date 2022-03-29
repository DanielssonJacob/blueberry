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
import IndividualIcon from '../individual/IndividualLoggedInField';
import { useCookies } from 'react-cookie'

function DefaultHeader() {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  return (

    <div> 
    <Route render={({ history}) => (
      <div className="defaultheader">
        <Logo onClick={() => { history.push(`/home`) }}></Logo>
        <div className='signed-in-area'>
        {cookies.user!=null ?            
               <div className="signin-field-div"><IndividualIcon/></div>
               : <SignInField link="/signin"></SignInField>}
               </div>
      </div>)}/>
      </div>
  )
}

export default DefaultHeader


 
     