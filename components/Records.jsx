import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Name, Department, Contactno, Adno, year) {
  return { Name, Department, Contactno, Adno, year};
}

const rows = [
  createData('Paul Antony', 'EC', 9874562589, 5466, 2021),
  createData('Afnas MP', 'CS', 9965823658, 5689, 2021),
  createData('Sharjith A', 'CS', 9965823652, 5459, 2021),
  createData('Govind Raj', 'EC', 9965845658, 6645, 2021),
  createData('Adarsh Kumar', 'ME', 9964893658, 9875, 2021),
];

const Records = () => {
    
  return (
    <div>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 , backgroundColor:'brown'}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Name</b></TableCell>
            <TableCell align="right"><b>Department</b></TableCell>
            <TableCell align="right"><b>Contact no.&nbsp;(g)</b></TableCell>
            <TableCell align="right"><b>Admission no.&nbsp;(g)</b></TableCell>
            <TableCell align="right"><b>Year&nbsp;(g)</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } , borderColor:'yellow' , borderBottom:'3px solid yellow'}}
            >
              <TableCell component="th" scope="row">
                {row.Name}
              </TableCell>
              <TableCell align="right">{row.Department}</TableCell>
              <TableCell align="right">{row.Contactno}</TableCell>
              <TableCell align="right">{row.Adno}</TableCell>
              <TableCell align="right">{row.year}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default Records