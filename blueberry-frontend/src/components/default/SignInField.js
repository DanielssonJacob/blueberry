import React from 'react'
import "./SignInField.css"
import { useHistory } from "react-router-dom";
import profilePic from "./profile.png"

function SignInField(props) {

    const history = useHistory(); 
    const routeChange = () =>{ 
        history.push(props.link);
    }
  return (
    <div className="sign-in-field">
        <div onClick={routeChange} className="sign-in-button pointer">
            <h2 id="sign-in-title">Sign in</h2>
        </div>
        <div >
            <img className="profile-pic" src={profilePic} alt="profilePicture" />
        </div>
    </div>
  )
}

export default SignInField