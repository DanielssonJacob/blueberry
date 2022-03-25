import React from 'react'
import { useState, useEffect, } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    useParams
} from "react-router-dom";

import './FullSearchResult.css';
import redcross from './companyImages/redcross.png';
import useFetch from "react-fetch-hook";
import DefaultHeader from '../default/DefaultHeader';

function FullSearchResult() {
    let { city } = useParams();

    const { isLoading, data, error } = useFetch("http://localhost:8080/companies");

    if(error){
        return <h2>Error</h2>
    }
    return (

        <div>      
                <DefaultHeader></DefaultHeader>
                <Link to="/">Back</Link>
                <h1 className='searchHeader'>Hjälporganisationer i {city}</h1>
                <div className='wrapper'>
                
                  <div className='searchResultCompanies'>             
                    {isLoading ? <h2>Loading...</h2> : data.filter((c)=>c.city===city).map((c) =>             
                    
                    <Route render={({ history}) => (                
                       <article className='companyArticle' onClick={() => { history.push(`/company/${c.name}`) }}>                            
                        <div className='companiesName'>{c.name}</div> 
                        <div className='companyImage'>
                            <img src={redcross} alt="red cross" />
                        </div>
                        <div className='companyInfo'>{c.description}</div>
                        <div className='companyCity'>{c.city}</div>                        
                    </article>)}/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default FullSearchResult