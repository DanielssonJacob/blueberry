import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Home() {
  return (
    <div>Home sweet home__
        <Link to="/organization">organization</Link>
    </div>
  )
}

export default Home