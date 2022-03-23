import React from 'react'
import { useState, useEffect, } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import './FullSearchResult.css';
import redcross from './companyImages/redcross.png';
import amnesty from './companyImages/amnesty.png';
import useFetch from "react-fetch-hook";

function FullSearchResult() {
    const { isLoading, data, error } = useFetch("http://localhost:8080/companies");
    if(error){
        return <h2>Error</h2>
    }

    return (

        <div>
            <div className='wrapper'>
                <Link to="/">Back</Link>
                <h1>Search Results</h1>
                <div className='dropDown'>
                    <select name="action" id="action">
                        <option value="donate">Choose action...</option>
                        <option value="donate">Donate</option>
                        <option value="volunteer">Volunteer</option>
                        <option value="pickup">Donation Pickup</option>
                    </select>
                </div>

                <div className='searchResultCompanies'>
                    {isLoading ? <h2>Loading...</h2> : data.map((c) =>
                        <article>
                        <div className='companyName'>{c.name}</div>
                        <div className='companyImage'>
                            <img src={redcross} alt="red cross" />
                        </div>
                        <div className='companyInfo'>{c.city}</div>
                    </article>
                    )}
                </div>
            </div>
        </div>
    )
}

export default FullSearchResult