import React from 'react'
import './Organization.css'
import { useState } from 'react'
import Logo from '../default/Logo'
import '../individual/IndividualPage.css'



function Organization() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")


  const inputUsername = (event) => {
    setUsername(event.target.value)
    //here we have taken the username as key, which is set in the cookie with its value
    localStorage.setItem('username', event.target.value)
  }


  const inputPassword = (event) => {
    setPassword(event.target.value)
  }


  const signInData = {
    cName: username,
    cPassword: password,
  }



  function signIn(props) {
    console.log(JSON.stringify(signInData))
    fetch("http://localhost:8080/logincompany", {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },

      //make sure to serialize your JSON body
      body: JSON.stringify(signInData)
    })
      .then((response) => {
        //do something awesome that makes the world a better place
        console.log(response)
      });
    window.location.href = `/company/${username}`

  }


  return (

    <div>
    <div className="individual-page-header">
    <Logo></Logo>
  </div>

    <div className="org-main">

     

      <div className="sub-main">



        <div>
          <h1>Login</h1>


          <div className="input-fields">
            <div>
              <input type="email" placeholder="username" className="username" value={username} onChange={inputUsername} />
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
    </div>



  )
}





export default Organization