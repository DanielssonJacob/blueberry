import React, { useEffect } from 'react'
import Logo from '../default/Logo'
import SignInField from '../default/SignInField'
import './IndividualPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import useFetch from "react-fetch-hook";
import { useState, useContext } from 'react'
import { useHistory } from "react-router-dom";
import Alert from '@mui/material/Alert';
import IndividualIcon from './IndividualLoggedInField';
import { useCookies } from 'react-cookie'

function IndividualPage() {
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const [organization, setOrganization] = useState("")
    const [city, setCity] = useState("")
    const [searchBy, setSearchBy] = useState("Organization")

    const { isLoading, data, error } = useFetch("http://localhost:8080/companies");

    const [isAlert, setIsAlert] = useState(false);
    const [snapshot, setSnapshot] = useState("");

    function search() {
        setIsAlert(false)
        
   if (searchBy === "Organization"){
    if (data.find(c => c.name === organization) != null) {
        setIsAlert(false)
        history.push(`/company/${organization}`)
    } else {
        setSnapshot(organization)
        setIsAlert(true)
    }
   }

   if (searchBy === "City"){
    if (data.find(c => c.city === city) != null) {
        setIsAlert(false)
        history.push(`/searchresult/${city}`)
    } else {
        setSnapshot(city)
        setIsAlert(true)
    }
   }
   
        
}


    let history = useHistory();

    if (error) {
        return <h2>Error</h2>
    }
    if (isLoading) {
        return <h2>Loading...</h2>
    }
    return (

        <div className="individual-page-body">
            {console.log(data)}
            {organization === "" ? <Alert hidden={!isAlert} severity="error">Error: You need to specify which {searchBy} you are looking for.</Alert> : <Alert hidden={!isAlert} severity="error">Error: Can't find {snapshot}.</Alert>}

            <div className="individual-page-header">
                <Logo></Logo>
                
                {cookies.user!=null ?
               
                <div className="signin-field-div"><IndividualIcon/></div>
                : <SignInField link="/signin"></SignInField>}
                
            </div>
            <div className="individual-page-searchfield">
                <div className="company-search-individual">
                    <label htmlFor='company-search-input'></label>

                    {searchBy === "Organization" ?
                        <Autocomplete
                            freeSolo
                            id="company-search-input"
                            className='form-control company-search-individual'
                            inputValue={organization}
                            onInputChange={(event, newInputValue) => {
                                setOrganization(newInputValue);
                            }}
                            options={data.map((c => c.name))}
                            sx={{ height: "70px", backgroundColor: "white" }}
                            renderInput={(params) => <TextField {...params} label="Organizations" />}
                            onKeyDown={(event) => {
                                if (event.key === 'Enter') {
                                    // Prevent's default 'Enter' behavior.
                                    event.defaultMuiPrevented = true;
                                    // your handler code
                                    if (data.find(c => c.name === organization) != null) {
                                        setIsAlert(false)
                                        history.push(`/company/${organization}`)
                                    } else {
                                        setSnapshot(organization)
                                        setIsAlert(true)
                                    }

                                }
                            }} />
                        :
                        <Autocomplete
                            freeSolo
                            id="company-search-input"
                            className='form-control company-search-individual'
                            inputValue={city}
                            onInputChange={(event, newInputValue) => {
                                setCity(newInputValue);
                            }}
                            options={[...new Set(data.map(c => c.city))]}
                            sx={{ height: "70px", backgroundColor: "white" }}
                            renderInput={(params) => <TextField {...params} label="City" />}
                            onKeyDown={(event) => {
                                if (event.key === 'Enter') {
                                    // Prevent's default 'Enter' behavior.
                                    event.defaultMuiPrevented = true;
                                    // your handler code
                                    if (data.find(c => c.city === city) != null) {
                                        setIsAlert(false)
                                        
                                        history.push(`/searchresult/${city}`)
                                    } else {
                                        setSnapshot(city)
                                        setIsAlert(true)
                                    }

                                }
                            }} />
                    }
                    <button onClick={search} className="search">Search</button>

                </div>
                <div className="dropdown-group-individual">
                    <div className="company-dropdown-individual">
                        <label htmlFor="company-search-by">Search by</label>
                        <select id="company-search-by" className="form-select donation-selection" onChange={(e) => setSearchBy(e.target.value)}>
                            <option defaultValue>Organization</option>
                            <option>City</option>
                        </select>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default IndividualPage



