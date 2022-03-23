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
import Alert from '@mui/material/Alert';

function IndividualPage() {
    const [ organization, setOrganization ] = useState("")

    const { isLoading, data, error } = useFetch("http://localhost:8080/companies");

    const [isAlert, setIsAlert] = useState(false);
    const [snapshot, setSnapshot] = useState("");

    let history = useHistory();

    if (error) {
        return <h2>Error</h2>
    }
    if (isLoading) {
        return <h2>Loading...</h2>
    }
    return (
        <div className="individual-page-body">
        {organization===""?<Alert hidden={!isAlert} severity="error">Error: You need to specify which organization you are looking for.</Alert>:<Alert hidden={!isAlert} severity="error">Error: Can't find {snapshot}.</Alert>}
        
            <div className="individual-page-header">
                <Logo></Logo>
                <SignInField link="/"></SignInField>
            </div>
            <div className="individual-page-searchfield">
                <div className="company-search-individual">
                    <label htmlFor='company-search-input'></label>
                    <Autocomplete
                        freeSolo
                        id="company-search-input"
                        className='form-control company-search-individual'
                        inputValue={organization}
                        onInputChange={(event, newInputValue) => {
                            setOrganization(newInputValue);
                        }}
                        options={data.map((c => c.name))}
                        sx={{height: "70px" , backgroundColor: "white" }}
                        renderInput={(params) => <TextField {...params} label="Organizations" />}
                        onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                                // Prevent's default 'Enter' behavior.
                                event.defaultMuiPrevented = true;
                                // your handler code
                                if(data.find(c => c.name===organization)!=null){
                                    setIsAlert(false)
                                    history.push(`/company/${organization}`)
                                } else{
                                    setSnapshot(organization)
                                    setIsAlert(true)
                                }
                                
                            }
                        }}/>

                </div>
                <div className="company-dropdown-individual">
                    <label htmlFor="company-search-select">Action</label>
                    <select id="company-search-select" className="form-select donation-selection">
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