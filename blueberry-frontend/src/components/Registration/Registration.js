import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DefaultButton from "../default/DefaultButton";
import Logo from "../default/Logo";
import "./Registration.css";
import { useState } from "react";
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import DefaultHeader from '../default/DefaultHeader'
import  { useEffect } from 'react';
import useDrivePicker from 'react-google-drive-picker'



import { useCookies } from "react-cookie";

function Registration() {
  const [companyName, setCompanyName] = useState("");
  const [companyCity, setCompanyCity] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyPerson, setCompanyPerson] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [companyOpeningHours, setCompanyOpeningHours] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isAlert, setIsAlert] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const [openPicker, data, authResponse] = useDrivePicker();

  const handleOpenPicker = () => {
    openPicker({
      clientId: "821778059846-bgioocsj6ivr5ddnveppmm3vntttdver.apps.googleusercontent.com",
      developerKey: "AIzaSyD9q-k9kmpOZYjIIwb-T6zxRrUPGWZQ9ok",
      viewId: "DOCS_IMAGES",
      // token: token, // pass oauth token in case you already have one
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      // customViews: customViewsArray, // custom view
    })
  }

  useEffect(() => {
    // do anything with the selected/uploaded files
    // funktion som sparar användarens bild
    if(data){
      data.docs.map(i => console.log(i.name))
    }
  }, [data])

  const sendForm = () => {
    if (companyName === "") {
      setIsAlert(true);
      setErrorMessage("Please enter a company name.");
      return;
    }
    if (companyCity === "") {
      setIsAlert(true);
      setErrorMessage("Please enter a city name.");
      return;
    }
    if (companyAddress === "") {
      setIsAlert(true);
      setErrorMessage("Please enter a company address.");
      return;
    }
    if (companyDescription === "") {
      setIsAlert(true);
      setErrorMessage("Please enter a company description.");
      return;
    }
    if (companyOpeningHours === "") {
      setIsAlert(true);
      setErrorMessage("Invalid opening hours.");
      return;
    }

    setErrorMessage("");
    handleSubmit();
  };

  const formData = {
    cName: companyName,
    cAddress: companyAddress,
    cCity: companyCity,
    cPerson: cookies.user.username,
    cDescription: companyDescription,
    cHours: companyOpeningHours,
  };

  function handleSubmit() {
    console.log(JSON.stringify(formData));
    fetch("http://localhost:8080/postcompany", {
      method: "post",
      headers: {
        'Accept': "application/json",
        "Content-Type": "application/json",
      },

      //make sure to serialize your JSON body
      body: JSON.stringify(formData),
    }).then((response) => {
      //do something awesome that makes the world a better place
      console.log(response);
    });
  }

  function addProfilePicture () {

  }



  return (
    <body className="body">
      <div className="logo1">
        <DefaultHeader></DefaultHeader>
      </div>

      <Alert hidden={!isAlert} severity="error">
        {errorMessage}
      </Alert>
      <div className="header1">
        <div className="title">
          <h1>Company Registration</h1>
        </div>
      </div>

      <div className="companyInformationInput">
        <div className="inputField">
          <label for="cName">Company name: </label>
          <input
            type="text"
            id="companyName"
            maxLength={25}
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>

        <div className="inputField">
          <label for="cCity">City: </label>
          <input
            type="text"
            id="companyCity"
            maxLength={25}
            value={companyCity}
            onChange={(e) => setCompanyCity(e.target.value)}
          />
        </div>
        <div className="inputField">
          <label for="cAddress">Address: </label>
          <input
            type="text"
            id="companyAddress"
            value={companyAddress}
            onChange={
              (e) =>
                setCompanyAddress(
                  e.target.value
                ) /*? (e.target.null == null) : alert(console.error)*/
            }
          />
        </div>
        <div className="inputField">
          <label for="cPerson">Contact person: </label>
          <input
            type="text"
            id="companyPerson"
            value={cookies.user.username}
            onChange={(e) => setCompanyPerson(e.target.value)}
          />
        </div>
        <div className="inputField">
          <label for="cDescription">Company description: </label>
          <textarea
            type="textarea"
            id="companyDescription"
            name="cdescription"
            rows="4"
            cols="30"
            value={companyDescription}
            onChange={(e) => setCompanyDescription(e.target.value)}
          />
        </div>
        <div className="inputField">
          <label for="openinghours">Opening hours: </label>
          <input
            type="text"
            id="companyOpeningHours"
            name="openinghours"
            value={companyOpeningHours}
            onChange={(e) => setCompanyOpeningHours(e.target.value)}
          />
        </div>
      </div>
      <div
        onClick={() => {
          sendForm();
        }}
        className="registerButton"
      >
        <DefaultButton onClick={sendForm} title="Register" />
      </div>
      <Link to="/">Home</Link>
    </body>
      <body className="body">

        <div className="logo1">
            <DefaultHeader></DefaultHeader>
        </div>

        <Alert hidden={!isAlert} severity="error">{errorMessage}</Alert>
        <div classname="inputField">
            {errorMessage===""?<label hidden for="registrationBanner">You're in!</label> : <Alert hidden={!isAlert} severity="error">Registration failed.</Alert> }
          </div>
        <div className="header1">
          <div className="title">
            <h1>Company Registration</h1>


          </div>
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

        <div onClick={() => {handleOpenPicker(); }} className="pictureButton" >
          <DefaultButton  onClick={() => handleOpenPicker} title="Add profile picture" />
        </div>
        </div>

        <div onClick={() => {sendForm(); }} className="registerButton" >
          <DefaultButton  onClick={{sendForm}} title="Register" />
        </div>

        <Link to="/">Home</Link>


      </body>
    //</form>
  );
}

export default Registration;
