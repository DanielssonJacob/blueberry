import React, { useEffect } from "react";
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
    const [cookies, setCookie, removeCookie] = useCookies(["user", "username"]);
    const history = useHistory();
    const [followedBy, setFollowedBy] = React.useState([])

    /*
        const { isLoading, data, error } = useFetch(`http://localhost:8080/followedby/${cookies.username}`);
    
    
        const result = useFetch(`http://localhost:8080/exist/${cookies.user.username}`);
    */
    async function getFollowed() {
        await fetch(`http://localhost:8080/followedby`, {
            method: "post",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },

            //make sure to serialize your JSON body
            body: JSON.stringify({
                user: cookies.username
            }),
        }).then(data => data.json()).then(data => setFollowedBy(data))

    }


    useEffect(() => {
        getFollowed()
    }, [])


    /*
    if (!result.isLoading) {
        console.log(result.data)
    }
    

    */
    return (
        <div>

            <div className="individual-page-header">
                <Logo></Logo>

                {cookies.user != null ?

                    <div className="signin-field-div"><IndividualIcon /></div>
                    : <SignInField link="/signin"></SignInField>}

            </div>

            <div className="followed-by-list container">

                {followedBy.map((c) =>

                    <Route render={({ history }) => (
                        <div>
                            <article className='followedCompany' onClick={() => { history.push(`/company/${c.name}`) }}>
                                <div className="information-company-followed-by">

                                    <img src="" alt="red cross" className="company-followed-by-img" />

                                    <div>
                                        <div><h2>{c.name}</h2></div>
                                        <div >{c.description}</div>
                                    </div>
                                </div>
                                <div className="followed-by-city">{c.city}</div>
                                <div className="boxed-news-followed">{c.blogPosts.map((p)=>{
                                return(<p>{p.post}</p>)
                            })}</div>
                            </article>
                            
                        </div>)} />
                )}
            </div>

        </div>)
}

export default Dashboard;
