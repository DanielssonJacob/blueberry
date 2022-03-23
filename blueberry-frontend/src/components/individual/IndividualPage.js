import React from 'react'
import Logo from '../default/Logo'
import SignInField from '../default/SignInField'
import './IndividualPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function IndividualPage() {
    return (
        <div className="individual-page-body">
            <div className="individual-page-header">
                <Logo></Logo>
                <SignInField link="/"></SignInField>
            </div>
            <div className="individual-page-searchfield">
                <div className="company-search-individual">
                    <Autocomplete
                        freeSolo
                        id="company-search-input"
                        options={["Unicef", "Red Cross", "Amnesty"]}
                        sx={{ width: 500, backgroundColor: "white" }}
                        renderInput={(params) => <TextField {...params} label="Organizations" />}
                    />
                </div>
                <div className="company-dropdown-individual">
                    <label htmlFor="company-search-input">Action</label>
                    <select className="form-select donation-selection" aria-label="Default select example">
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