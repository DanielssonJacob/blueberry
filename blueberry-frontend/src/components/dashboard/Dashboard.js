import React from "react";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import useFetch from "react-fetch-hook";
import {
    BrowserRouter as Router,
    Route,
    Link,
    useParams
} from "react-router-dom";
import "./Dashboard.css"
import SignInField from "../default/SignInField";
import IndividualIcon from "../individual/IndividualLoggedInField";
import Logo from "../default/Logo";

function Dashboard() {
    const [cookies, setCookie, removeCookie] = useCookies(["user"]);
    const history = useHistory();
    let user = "";
    if (cookies.user != null) {
        user = cookies.user.username
    }

    const { isLoading, data, error } = useFetch(`http://localhost:8080/followedby/${user}`);



    return (
        <div>
            <div className="individual-page-header">
                <Logo></Logo>

                {cookies.user != null ?

                    <div className="signin-field-div"><IndividualIcon /></div>
                    : <SignInField link="/signin"></SignInField>}

            </div>

            <div className="followed-by-list">
                {isLoading ? <h2>Loading...</h2> : data.map((c) =>

                    <Route render={({ history }) => (
                        <article className='followedCompany' onClick={() => { history.push(`/company/${c.name}`) }}>
                            <div className="information-company-followed-by">
                               
                                    <img src="" alt="red cross" className="company-followed-by-img"/>
                            
                                <div>
                                    <div>{c.name}</div>
                                    <div >{c.description}</div>
                                </div>
                            </div>
                            <div >{c.city}</div>
                        </article>)} />
                )}
            </div>
        </div>)
}

export default Dashboard;
