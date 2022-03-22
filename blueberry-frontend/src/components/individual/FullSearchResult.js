import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import './FullSearchResult.css';
  import redcross from './companyImages/redcross.png';
  import amnesty from './companyImages/amnesty.png';

function FullSearchResult() {
  return (
      
    <div>
         <Link to="/">Back</Link>
        <div className='searchResultBody'>
        <h1>Search Results</h1>
       </div>
       <div className='searchResultCompanies'>
            <article>
                <div className='companyName'>Name</div>
                <div className='companyImage'>
                    <img src={redcross} alt="red cross" />
                </div>
                <div className='companyInfo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Vivamus ac ex augue. Duis bibendum ornare arcu, sed congue enim fermentum ut. Aliquam 
                vestibulum laoreet nibh. ae volutpat...</div>
            </article>
            <article>
                <div className='companyName'>Name</div>
                <div className='companyImage'>
                    <img src={amnesty} alt="amnesty" />
                </div>
                <div className='companyInfo'>Lorem Ipsum</div>
            </article>
            <article>
                <div className='companyName'>Name</div>
                <div className='companyImage'></div>
                <div className='companyInfo'>Lorem Ipsum</div>
            </article>
            <article>
                <div className='companyName'>Name</div>
                <div className='companyImage'></div>
                <div className='companyInfo'>Lorem Ipsum</div>
            </article>
       </div>
    </div>
  )
}

export default FullSearchResult