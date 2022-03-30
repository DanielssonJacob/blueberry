import React from 'react'
import { useState, useEffect } from 'react'
import Image from "./companyImage.png";
import {
    useParams,
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import useFetch from "react-fetch-hook";
import { useCookies } from "react-cookie";
import DefaultButton from '../default/DefaultButton';
import "./CompanyDetails.css"
import DefaultHeader from '../default/DefaultHeader';

const googlemap = "MAP"

function CompanyDetails() {
    const [cookies, setCookie, removeCookie] = useCookies(["user"]);
    const [newDescription, setNewDescription] = useState("");
    const [newBlogPost, setNewBlogPost] = useState("");
    const [toggleButton, setToggleButton] = useState(true);
    const [toggleButtonBlog, setToggleButtonBlog] = useState(true);


    let { companyname } = useParams();
    const { isLoading, data, error } = useFetch("http://localhost:8080/company/" + companyname);
    const [editIndex, setEditIndex] = useState(null);

    if (error) {
        return <h2>Error</h2>
    }

    async function editprofile(cId) {
        await fetch("http://localhost:8080/edit/", {
            method: "put",
            headers: {
                'Accept': "application/json",
                "Content-Type": "application/json",
            },

            //make sure to serialize your JSON body
            body: JSON.stringify({
                cId,
                cDescription: newDescription
            }),
        }).then(data => data.json())
            .then(data => console.log(data))


    }

    async function editblogpost(bId) {
        await fetch("http://localhost:8080/editblogpost/", {
            method: "put",
            headers: {
                'Accept': "application/json",
                "Content-Type": "application/json",
            },

            //make sure to serialize your JSON body
            body: JSON.stringify({
                bId,
                bBlogPost: newBlogPost
            }),
        }).then(data => data.json())
            .then(data => console.log(data))
    }


    async function followCompany(companyId) {
        if (cookies.user != null) {

            await fetch("http://localhost:8080/follow", {
                method: "post",
                headers: {
                    'Accept': "application/json",
                    "Content-Type": "application/json",
                },

                //make sure to serialize your JSON body
                body: JSON.stringify({
                    companyId,
                    user: cookies.user.username

                }),
            }).then(data => data.json())
                .then(data => console.log(data))
        }
    }


    return (

        <div>
            {isLoading ? <h2>Loading...</h2> : data.map((c) =>
                <div>

                    <DefaultHeader></DefaultHeader>


                    <div>

                        <div className='companyheader'>
                            <h1 className='companyName'>{c.name}</h1>
                        </div>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={4}>
                                    <Container maxWidth="sm">
                                        <img src={Image}></img>
                                    </Container>
                                </Grid>
                                <Grid item xs={4}>
                                    <div hidden={!toggleButton}>
                                        {c.description}
                                        <div>
                                            {
                                                cookies.user != null ? (cookies.user.role === "COMPANY" && cookies.user.username === c.person.username ?
                                                    (<button onClick={() => {
                                                        setNewDescription(c.description)
                                                        setToggleButton(!toggleButton)
                                                    }} className='edit-button' >Edit</button>) : null) :
                                                    <div>
                                                    </div>

                                            }

                                        </div>
                                    </div>
                                    <form hidden={toggleButton} onSubmit={() => editprofile(c.id)}>
                                        <textarea type="text" value={newDescription} onChange={(e) => setNewDescription(e.target.value)}></textarea>
                                        <button className='edit-button' type="submit">Update</button>
                                    </form>
                                </Grid>
                                <Grid item xs={4}>
                                    <Container maxWidth="sm">
                                        {googlemap}
                                    </Container>
                                </Grid>
                                <Grid item xs={4}>
                                    <Container maxWidth="sm">
                                        <Card sx={{ minWidth: 275 }}>
                                            <CardContent>
                                                Address: {c.address} <br></br>Contact person: {c.person.username}
                                            </CardContent>
                                        </Card>
                                    </Container>
                                </Grid>
                                <Grid item xs={4}>
                                    <Container maxWidth="sm">
                                        <TableContainer component={Paper}>
                                            <Table sx={{ minWidth: 50 }} aria-label="simple table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>Day of the week</TableCell>
                                                        <TableCell align="right">Open</TableCell>
                                                        <TableCell align="right">Close</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell component="th"> Weekday </TableCell>
                                                        <TableCell align="right">{c.openingTimes.weekdayOpen}</TableCell>
                                                        <TableCell align="right">{c.openingTimes.weekdayClose}</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell component="th"> Saturday </TableCell>
                                                        <TableCell align="right">{c.openingTimes.saturdayOpen}</TableCell>
                                                        <TableCell align="right">{c.openingTimes.saturdayClose}</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell component="th"> Sunday </TableCell>
                                                        <TableCell align="right">{c.openingTimes.sundayOpen}</TableCell>
                                                        <TableCell align="right">{c.openingTimes.sundayClose}</TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Container>
                                </Grid>
                                <Grid item xs={4}>
                                    <Container maxWidth="sm">
                                        <div onClick={() => followCompany(c.id)}>
                                            <DefaultButton title="Follow us"></DefaultButton>
                                        </div>
                                        <div id="detailsButton"></div>
                                        <DefaultButton title="Help us"></DefaultButton>
                                    </Container>
                                </Grid>
                            </Grid>
                        </Box>
                    </div>
                    {c.blogPosts.map((d) =>
                        <div className='blogheader'>
                            <Grid item xs={12}>
                                <Container hidden={!toggleButtonBlog} className='blogpost'>
                                    <Card >
                                        <div className="time">{d.time}</div>
                                        <h5>{d.header}</h5>
                                        <div classname="post">{d.post}</div>

                                    </Card>
                                    {
                                        cookies.user != null ? (cookies.user.role === "COMPANY" && cookies.user.username === c.person.username ?
                                            (<button onClick={() => {
                                                setEditIndex(editIndex => editIndex === d.id ? null : d.id)
                                                setToggleButtonBlog(!toggleButtonBlog)
                                            }} className='edit-button' >Edit</button>) : null) :
                                            <div>
                                            </div>

                                    }
                                </Container>
                                {editIndex === d.id &&
                                    <form hidden={toggleButtonBlog} onSubmit={() => editblogpost(d.id)}>
                                        <textarea placeholder={d.post} className='editblog' type="text" value={newBlogPost} onChange={(e) => setNewBlogPost(e.target.value)}></textarea>
                                        <button className='edit-button' type="submit">Update</button>
                                    </form>}

                            </Grid>
                        </div>

                    )}
                </div>
            )}

        </div>
    )
}

export default CompanyDetails