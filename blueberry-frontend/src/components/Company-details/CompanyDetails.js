import React, { useState, useEffect } from 'react'
import Image from "./companyImage.png";
import "./CompanyDetails.css"
import {
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
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { positions } from '@mui/system';
import CompanyList from './CompanyList';

import useFetch from "react-fetch-hook";




const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function createData(day, opening, closing) {
  return { day, opening, closing };
}

const rows = [
  createData('Monday', "10:00", "14.00"),
  createData('Tuesday', "10:00", "14.00"),
  createData('Wensday', "10:00", "14.00"),
  createData('Thursday', "10:00", "14.00"),
  createData('Friday', "10:00", "14.00"),
  createData('Saturday', "10:00", "15.00"),
  createData('Sunday', "10:00", "15.00"),
];

// const companyInfo = [{description: "We are an established helping organization with focus on helping people in poor countries with medical problems"},{name:"Röda Korset"},{map:"Google Map"},{feed:"FEEEEEEED"},{info:"General information"}]
const description = "We are an established helping organization with focus on helping people in poor countries with medical problems"
const name = "Röda Korset"
const map = "GOOGLE MAP"
const feed = "FEEEEEEEEEEED"
const info = "General information"
// const current = [{caption:"water for uganda"}, {bread:"Right now we need your help getting more fresh water for the people of Uganda."}]
const currentBread = "Right now we need your help getting more fresh water for the people of Uganda."
const currentCaption = "water for uganda"




function CompanyDetails() {

  const { isLoading, data, error } = useFetch("http://localhost:8080/companies");
  if (error) {
    return <h2>Error</h2>
  }
  return (

    <React.Fragment>
      <CompanyList />

      <h1 className='companyName' >{name}</h1>

      {isLoading ? <h2>Loading...</h2> : data.map((c) =>
        <h2>{c.name}</h2>
      )}
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Container maxWidth="sm">
              <img src={Image}></img>
            </Container>
          </Grid>
          <Grid item xs={4}>
            {description}
          </Grid>
          <Grid item xs={4}>
            <Container maxWidth="sm">
              {map}
            </Container>
          </Grid>
          <Grid item xs={4}>
            <Container maxWidth="sm">
              {info}
            </Container>
          </Grid>
          <Grid item xs={4}>
            <Container maxWidth="sm">
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 50 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Day of the week</TableCell>
                      <TableCell align="right">Opening</TableCell>
                      <TableCell align="right">closing</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.day}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">
                          {row.day}
                        </TableCell>
                        <TableCell align="right">{row.opening}</TableCell>
                        <TableCell align="right">{row.closing}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Container>
          </Grid>
          <Grid item xs={4}>
            <Container maxWidth="sm">
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Current
                  </Typography>
                  <Typography sx={{ mb: 2.5 }} variant="h5" component="div">
                    {currentCaption}
                  </Typography>
                  <Typography variant="body2">
                    {currentBread}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Container>
          </Grid>
          <Grid item xs={12}>
            <Container maxWidth="sm">
              {feed}
            </Container>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>

  )
}


export default CompanyDetails


