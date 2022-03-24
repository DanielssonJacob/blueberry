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
import DefaultHeader from '../default/DefaultHeader';

function FullSearchResult() {
    const { isLoading, data, error } = useFetch("http://localhost:8080/companies");
    if(error){
        return <h2>Error</h2>
    }

    return (

        <div>
              
                <DefaultHeader></DefaultHeader>
                <Link to="/">Back</Link>
            
                <div className='wrapper'>
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
                    <Route render={({ history}) => (
                        <article className='companyArticle' onClick={() => { history.push(`/company/${c.name}`) }}>                            
                        <div className='companiesName'>{c.name}</div> 
                        <div className='companyImage'>
                            <img src={redcross} alt="red cross" />
                        </div>
                        <div className='companyInfo'>{c.description}</div>
                        
                    </article>)}/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default FullSearchResult