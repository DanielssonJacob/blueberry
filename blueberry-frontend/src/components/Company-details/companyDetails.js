    import React from 'react'
    import Image from "./companyImage.png";
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
      
      function createData(day,opening, closing) {
        return { day,opening, closing };
      }
      
      const rows = [
        createData('Monday', "10:00", "14.00"),
        createData('Tuesday',"10:00", "14.00"),
        createData('Wensday',"10:00", "14.00"),
        createData('Thursday',"10:00", "14.00"),
        createData('Friday',"10:00", "14.00"),
        createData('Saturday', "10:00", "15.00"),
        createData('Sunday',"10:00", "15.00"),
      ];


    function companyDetails() {
      return (
    
        
          <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
      <img src={Image}></img>
        </Container>
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
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
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
    </React.Fragment>
      
      )
    }
   
    
    export default companyDetails

