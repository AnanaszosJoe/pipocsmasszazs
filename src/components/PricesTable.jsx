import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { arckezeles, massage } from '../data';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: magnolie,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const magnolie = "#BC6093"

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export const PricesTable = () => {
  return (
    <TableContainer component={Paper} sx={{margin: "0 auto", padding: "5vw"}}>
      <Table sx={{ width: "90vw"}} aria-label="customized table">
        <TableHead>
          <TableRow >
            <StyledTableCell sx={{ fontWeight: "bolder"}}>Kezelés</StyledTableCell>
            <StyledTableCell align="right" sx={{ fontWeight: "bolder"}}>Időtartam (perc)</StyledTableCell>
            <StyledTableCell align="right" sx={{ fontWeight: "bolder"}}>Ár (Ft)</StyledTableCell>
        </TableRow>
        </TableHead>
        <TableBody>
          {massage.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.title}
              </StyledTableCell>
              <StyledTableCell align="right">{row.duration}</StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
            </StyledTableRow>
          ))}
          {arckezeles.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.title}
              </StyledTableCell>
              <StyledTableCell align="right">{row.duration}</StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}