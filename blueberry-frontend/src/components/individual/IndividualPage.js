import React from 'react'
import Logo from '../default/Logo'
import SignInField from '../default/SignInField'
import './IndividualPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function IndividualPage() {
    return (
        <div className="individual-page-body">
            <div className="individual-page-header">
                <Logo></Logo>
                <SignInField></SignInField>
            </div>
            <div className="individual-page-searchfield">
                <input type="text" name="" id="" placeholder='Search' className="form-control search-donation-input"/>
                <select className="form-select donation-selection" aria-label="Default select example">
                    <option selected>Donate</option>
                    <option>Volunteer</option>
                    <option>Donation Pickup</option>
                </select>
            </div>
        </div>
    )
}

export default IndividualPage