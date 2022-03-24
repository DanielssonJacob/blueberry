import React from 'react'
import './Logo.css'
import { useHistory } from "react-router-dom";

function Logo() {
  let history= useHistory();
  return (
    <div>
        <div onClick={()=>history.push("/")} id="logo">
                <h2>blueberry</h2>
                <p>Help others</p>
        </div>
    </div>
  )
}

export default Logo