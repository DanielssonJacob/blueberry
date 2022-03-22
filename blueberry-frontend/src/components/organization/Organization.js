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
    <div className="org-main">
      <div className="sub-main">

        <div>
          <h1>Login</h1>
          <div>
            <input type="email" placeholder="username" className="input" />
          </div>

          <div>
            <input type="password" placeholder="password" className="input" />
          </div>


          <button >Sign in</button>
          

          <div>
          <a className="link" href="">Create account</a>
          </div>


        </div>


      </div>
    </div>



  )
}

/*
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
*/

export default Organization