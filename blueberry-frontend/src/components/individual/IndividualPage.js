import React from 'react'
import Logo from '../default/Logo'
import SignInField from '../default/SignInField'
import './IndividualPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import useFetch from "react-fetch-hook";
import { useState } from 'react'
import { useHistory } from "react-router-dom";

function IndividualPage() {
    const [ organization, setOrganization ] = useState("")

    const { isLoading, data, error } = useFetch("http://localhost:8080/companies");

    let history = useHistory();

    if (error) {
        return <h2>Error</h2>
    }
    if (isLoading) {
        return <h2>Loading...</h2>
    }
    return (
        <div className="individual-page-body">
            <div className="individual-page-header">
                <Logo></Logo>
                <SignInField link="/"></SignInField>
            </div>
            <div className="individual-page-searchfield">
                <div className="company-search-individual">
                    <label htmlFor='company-search-input'>Organization</label>
                    <input id="company-search-input" type="text" className="form-control" onChange={(e)=>setOrganization(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            history.push(`/company_details/${organization}`)
                        }
                    }} />
                </div>
                <div className="company-dropdown-individual">
                    <label htmlFor="company-search-select">Action</label>
                    <select id="company-search-select" className="form-select donation-selection" aria-label="Default select example">
                        <option selected>Donate</option>
                        <option>Volunteer</option>
                        <option>Donation Pickup</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default IndividualPage