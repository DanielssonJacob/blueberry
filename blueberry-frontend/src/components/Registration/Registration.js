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



function Registration() {
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyPerson, setCompanyPerson] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [companyOpeningHours, setCompanyOpeningHours] = useState("");

  const formData = {
    cName: companyName,
    cAddress: companyAddress,
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
    <form onSubmit={handleSubmit}>
      <div>
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
            <label for="cname">Company name: </label>
            <input type="text" id="companyName" value={companyName} onChange={e => setCompanyName(e.target.value)} />

          </div>
          <div className="inputField">
            <label for="address">Address: </label>
            <input type="text" id="companyAddress" value={companyAddress} onChange={e => setCompanyAddress(e.target.value)} />
          </div>
          <div className="inputField">
            <label for="cperson">Contact person: </label>
            <input type="text" id="companyPerson" value={companyPerson} onChange={e => setCompanyPerson(e.target.value)} />
          </div>
          <div className="inputField">
            <label for="cdescription">Company description: </label>
            <textarea type="textarea" id="companyDescription" name="cdescription" rows="4" cols="50" value={companyDescription} onChange={e => setCompanyDescription(e.target.value)} />
          </div>
          <div className="inputField">
            <label for="openinghours">Opening hours: </label>
            <input type="text" id="companyOpeningHours" name="openinghours" value={companyOpeningHours} onChange={e => setCompanyOpeningHours(e.target.value)} />
          </div>
        </div>
        <div onClick={() => handleSubmit()} className="registerButton">
          <DefaultButton type="submit" title="Register" />
        </div>

        <Link to="/">Home</Link>
      </div>
    </form>
  )
}

export default Registration