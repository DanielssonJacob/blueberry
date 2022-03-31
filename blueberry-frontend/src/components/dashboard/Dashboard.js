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
import DefaultHeader from '../default/DefaultHeader';

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

            <DefaultHeader></DefaultHeader>

            <div className="followed-by-list container">

                {followedBy.map((c) =>

                    <Route render={({ history }) => (
                        <div>
                            <article className='followedCompany' onClick={() => { history.push(`/company/${c.name}`) }}>
                                <div className="information-company-followed-by">

                                {c.imageUrl==null ? <img alt="no-image" /> : <img style={{width: "100px", borderRadius: 100}} src={`http://localhost:3001/${c.imageUrl}`}></img>}

                                    <div>
                                        <div><h2>{c.name}</h2></div>
                                        <div >{c.description}</div>
                                    </div>
                                </div>
                                <div className="followed-by-city">{c.city}</div>
                                {c.blogPosts.length>0 ? 
                                <div className="boxed-news-followed">{c.blogPosts.map((p)=>{
                                return(<p>{p.post}</p>)
                            })}</div> : <div></div>}
                            </article>
                            
                        </div>)} />
                )}
            </div>

        </div>)
}

export default Dashboard;
