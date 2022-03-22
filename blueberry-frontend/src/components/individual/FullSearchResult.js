import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function FullSearchResult() {
  return (
    <div>
        <h1>Search Results</h1>
        <Link to="/">Back home</Link>
    </div>
  )
}

export default FullSearchResult