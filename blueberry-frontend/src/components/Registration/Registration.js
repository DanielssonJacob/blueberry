import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DefaultButton from '../default/DefaultButton';
import './Registration.css'
import { useState } from "react";
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';



function Registration() {
  const [companyName, setCompanyName] = useState("");
  const [companyCity, setCompanyCity] = useState("");
  const [companyPassword, setCompanyPassword] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyPerson, setCompanyPerson] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [companyOpeningHours, setCompanyOpeningHours] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isAlert, setIsAlert] = useState(false);

  const sendForm = () => {
      

      if (companyName === "") {
        setIsAlert(true);
        setErrorMessage("Please enter a company name.")
        return;
      }
      if (companyAddress === "") {
        setIsAlert(true);
        setErrorMessage("Please enter a company address.")
        return;
      }
      if (companyPerson === "") {
        setIsAlert(true);
        setErrorMessage("Please enter a contact person.")
        return;
      }
      if (companyDescription === "") {
        setIsAlert(true);
        setErrorMessage("Please enter a company description.")
        return;
      }
      if (companyOpeningHours === "") {
        setIsAlert(true);
        setErrorMessage("Invalid opening hours.")
        return;
      }
      
      setErrorMessage("")
      
  }

  const formData = {
    cName: companyName,
    cAddress: companyAddress,
    cCity: companyCity,
    cPassword: companyPassword,
    cPerson: companyPerson,
    cDescription: companyDescription,
    cHours: companyOpeningHours,

  }

  function handleSubmit() {
    console.log(JSON.stringify(formData))
    fetch("http://localhost:8080/postcompany", {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },

      //make sure to serialize your JSON body
      body: JSON.stringify(formData)
    })
      .then((response) => {
        //do something awesome that makes the world a better place
        console.log(response)
      });
  }



  /*const { register, handleSubmit } = useForm();
  const handleRegistration = (data) => console.log(data); */
  /*function inputSetName(event) {
    setName(event.target.value)
  }  */
  return (
   // <form onSubmit={handleSubmit}>
      <div>
        <Link to="/">Home</Link>
        <Alert hidden={!isAlert} severity="error">{errorMessage}</Alert>
        <div className="header1">
          <div className="title">
            <h1>Company Registration</h1>
            <h2>{companyName}</h2>

          </div>
        </div>
        <div className="logo1">

        </div>
        <div className="companyInformationInput">
          <div className="inputField">
            <label for="cName">Company name: </label>
            <input type="text" id="companyName" maxLength={25} value={companyName} onChange={e => setCompanyName(e.target.value)} />

          </div>
          <div className="inputField">
            <label for="cPassword">Password: </label>
            <input type="password" id="companyPassword" minLength={6} maxLength={25} value={companyPassword} onChange={e => setCompanyPassword(e.target.value)} />

          </div>
          <div className="inputField">
            <label for="cCity">City: </label>
            <input type="text" id="companyCity" maxLength={25} value={companyCity} onChange={e => setCompanyCity(e.target.value)} />
          </div>
          <div className="inputField">
            <label for="cAddress">Address: </label>
            <input type="text" id="companyAddress" value={companyAddress} onChange={e => setCompanyAddress(e.target.value) /*? (e.target.null == null) : alert(console.error)*/} />
          </div>
          <div className="inputField">
            <label for="cPerson">Contact person: </label>
            <input type="text" id="companyPerson" value={companyPerson} onChange={e => setCompanyPerson(e.target.value)} />
          </div>
          <div className="inputField">
            <label for="cDescription">Company description: </label>
            <textarea type="textarea" id="companyDescription" name="cdescription" rows="4" cols="30" value={companyDescription} onChange={e => setCompanyDescription(e.target.value)} />
          </div>
          <div className="inputField">
            <label for="openinghours">Opening hours: </label>
            <input type="text" id="companyOpeningHours" name="openinghours" value={companyOpeningHours} onChange={e => setCompanyOpeningHours(e.target.value)} />
          </div>
        </div>
        <div onClick={() => {handleSubmit(); sendForm();}} className="registerButton" >
          <DefaultButton  onClick={sendForm} title="Register" />
        </div>
        
        
        
      </div>
    //</form>
  )
}

export default Registration