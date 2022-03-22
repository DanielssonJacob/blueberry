import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './Organization.css'
import DefaultButton from '../default/DefaultButton';


function Organization() {
  return (
    <div className="org-main">
      <div className="sub-main">



        <div>

        <h1>Login</h1> 

          <div className input-fields>
            <div>
              <input type="email" placeholder="username" className="username" />
            </div>

            <div>
              <input type="password" placeholder="password" className="password" />
            </div>
          </div>


          <button >Sign in</button>


          <div>
            <a className="link" href="/registration">Create account</a>
          </div>


        </div>


      </div>
    </div>



  )
}



export default Organization