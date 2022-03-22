import React from 'react'
import { Button } from '@mui/material';
import './DefaultButton.css'

function DefaultButton(props) {
  return (
    <Button href={props.link} className="button" sx={ { borderRadius: 3, height: 75, color: "#0271BB", width:200, textTransform: "none"} } variant="contained">
        <h2>{props.title}</h2>
    </Button>
  )
}

export default DefaultButton