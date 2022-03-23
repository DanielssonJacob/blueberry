import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './Organization.css'
import { useState } from 'react'
import DefaultButton from '../default/DefaultButton';


function Organization() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const inputEmail = (event) => {
    setEmail(event.target.value)
  }

  const inputPassword = (event) => {
    setPassword(event.target.value)
  }

  const signIn = () => {
    if(email != "" && password != "") {
      window.location.href = '/fullsearchresult'
    }
  }


    return (
      
      <div className="org-main">
        <div className="sub-main">



          <div>
          <h1>Login</h1>
        

            <div className="input-fields">
              <div>
                <input type="email" placeholder="username" className="username" value={email} onChange={inputEmail} />
              </div>

              <div>
                <input type="password" placeholder="password" className="password" value={password} onChange={inputPassword} />
              </div>
            </div>


            <button onClick={signIn} className="sign-in">Sign in</button>


            <div>
              <a className="link" href="/registration">Create account</a>
            </div>


          </div>


        </div>
      </div>



    )
  }

  



  export default Organization